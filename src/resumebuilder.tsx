
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

type Template = 'Classic' | 'Modern' | 'Premium' | 'Creative' | 'Minimalist';

interface Experience {
  id: string;
  title: string;
  company: string;
  dates: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  dates: string;
  description: string;
}

interface CustomSection {
  id: string;
  title: string;
  content: string;
}

interface ResumeData {
  name: string;
  role: string;
  email: string;
  phone: string;
  summary: string;
  skills: string[];
  experiences: Experience[];
  projects: Project[];
  customSections: CustomSection[];
}

interface AISuggestionContext {
  field: 'summary' | 'experience' | 'skills';
  experienceId?: string;
  suggestions: string[];
}

const ResumeBuilder: React.FC = () => {
  const [template, setTemplate] = useState<Template>('Modern');
  const [skillInput, setSkillInput] = useState('');
  const [isAIThinking, setIsAIThinking] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<AISuggestionContext | null>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  const initialData: ResumeData = {
    name: 'Rahul Sharma',
    role: 'Front Office Manager',
    email: 'rahul.s@email.com',
    phone: '+91 98765 43210',
    summary: 'Dedicated hospitality professional with 8+ years of experience in managing high-end hotel front offices and guest relations.',
    skills: ['OPERA PMS', 'Guest Relations', 'Team Leadership', 'Crisis Management'],
    experiences: [
      {
        id: '1',
        title: 'Front Office Manager',
        company: 'Hotel Grand Plaza',
        dates: '2018 - Present',
        description: 'Led a team of 15+ staff. Improved guest satisfaction by 25%. Managed high-volume check-ins and VIP relations.'
      }
    ],
    projects: [],
    customSections: [
      {
        id: 'c1',
        title: 'Certifications',
        content: 'Certified Hospitality Supervisor (CHS)\nAdvanced First Aid & CPR'
      },
      {
        id: 'c2',
        title: 'Awards & Recognition',
        content: 'Employee of the Year 2022\nOutstanding Service Excellence Award'
      }
    ]
  };

  const [data, setData] = useState<ResumeData>(() => {
    const saved = localStorage.getItem('joblynk_resume_draft');
    return saved ? JSON.parse(saved) : initialData;
  });

  // History for Undo/Redo
  const [history, setHistory] = useState<ResumeData[]>([data]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const pushToHistory = useCallback((newData: ResumeData) => {
    setHistory(prev => {
      const newHistory = prev.slice(0, historyIndex + 1);
      newHistory.push(newData);
      if (newHistory.length > 50) newHistory.shift();
      return newHistory;
    });
    setHistoryIndex(prev => {
      const newIdx = Math.min(history.length, 49);
      // We calculate based on the new length which will be historyIndex + 1 + 1 (unless capped)
      const currentLen = history.slice(0, historyIndex + 1).length;
      return currentLen;
    });
  }, [historyIndex, history.length]);

  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
    pushToHistory(newData);
  };

  const undo = () => {
    if (historyIndex > 0) {
      const prevIndex = historyIndex - 1;
      setHistoryIndex(prevIndex);
      setData(history[prevIndex]);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      setHistoryIndex(nextIndex);
      setData(history[nextIndex]);
    }
  };

  const generateAISuggestion = async (field: 'summary' | 'experience' | 'skills', context?: any) => {
    setIsAIThinking(true);
    setAiSuggestions(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      let prompt = "";
      
      const roleContext = `Target Role: ${data.role}. Industry: Professional Services/Hospitality.`;

      if (field === 'summary') {
        prompt = `Act as an expert ATS (Applicant Tracking System) optimizer and Senior HR Executive. 
        Analyze: "${data.summary}". ${roleContext}
        Generate 3 variations optimized for ATS ranking and human impact:
        Variation 1 (ATS Keyword Optimized): Focus on high-frequency industry keywords for ${data.role}.
        Variation 2 (Achievement Focused): Lead with strong action verbs and quantifiable metrics (%, $, time).
        Variation 3 (Leadership Hybrid): Balance soft leadership skills with core technical competencies.
        Constraint: Professional, under 320 chars each. JSON object with "suggestions" array.`;
      } else if (field === 'experience') {
        prompt = `Act as an expert resume editor for the role of ${context.title} at ${context.company}. 
        Analyze: "${context.description}". ${roleContext}
        Generate 3 variations of powerful achievement statements:
        Variation 1: "Keyword Rich" - Optimized for ATS scans.
        Variation 2: "Metric Driven" - Use numbers/data to show impact.
        Variation 3: "Role Competency" - Highlight specific skills mentioned in job descriptions for ${data.role}.
        JSON object with "suggestions" array of strings.`;
      } else if (field === 'skills') {
        prompt = `Suggest 8-10 highly relevant, high-impact hard and soft skills for a ${data.role}. 
        Summary context: ${data.summary}. 
        Focus on "ATS Gold" keywords that trigger higher matching scores in recruiting software.
        JSON object with "suggestions" array of strings.`;
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              suggestions: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["suggestions"]
          }
        }
      });

      const result = JSON.parse(response.text || '{"suggestions":[]}');
      setAiSuggestions({ field, experienceId: context?.id, suggestions: result.suggestions || [] });
    } catch (error) {
      console.error("AI Error:", error);
      alert("AI service is busy. Please try manual editing for a moment.");
    } finally {
      setIsAIThinking(false);
    }
  };

  const applyAISuggestion = (suggestion: string) => {
    if (!aiSuggestions) return;
    
    let newData: ResumeData;
    if (aiSuggestions.field === 'summary') {
      newData = { ...data, summary: suggestion };
    } else if (aiSuggestions.field === 'skills') {
      const existing = new Set(data.skills);
      existing.add(suggestion);
      newData = { ...data, skills: Array.from(existing) };
    } else {
      newData = {
        ...data,
        experiences: data.experiences.map(exp => 
          exp.id === aiSuggestions.experienceId ? { ...exp, description: suggestion } : exp
        )
      };
    }
    
    setData(newData);
    pushToHistory(newData);
    if (aiSuggestions.field !== 'skills') setAiSuggestions(null);
  };

  const addSkill = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (skillInput.trim() && !data.skills.includes(skillInput.trim())) {
      const newData = { ...data, skills: [...data.skills, skillInput.trim()] };
      setData(newData);
      pushToHistory(newData);
      setSkillInput('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    const newData = { ...data, skills: data.skills.filter(s => s !== skillToRemove) };
    setData(newData);
    pushToHistory(newData);
  };

  const addExperience = () => {
    const newExp: Experience = { id: Date.now().toString(), title: '', company: '', dates: '', description: '' };
    const newData = { ...data, experiences: [...data.experiences, newExp] };
    setData(newData);
    pushToHistory(newData);
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    const newData = { ...data, experiences: data.experiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp) };
    setData(newData);
    pushToHistory(newData);
  };

  const removeExperience = (id: string) => {
    const newData = { ...data, experiences: data.experiences.filter(exp => exp.id !== id) };
    setData(newData);
    pushToHistory(newData);
  };

  const addProject = () => {
    const newProj: Project = { id: Date.now().toString(), title: '', dates: '', description: '' };
    const newData = { ...data, projects: [...data.projects, newProj] };
    setData(newData);
    pushToHistory(newData);
  };

  const updateProject = (id: string, field: keyof Project, value: string) => {
    const newData = { ...data, projects: data.projects.map(p => p.id === id ? { ...p, [field]: value } : p) };
    setData(newData);
    pushToHistory(newData);
  };

  const removeProject = (id: string) => {
    const newData = { ...data, projects: data.projects.filter(p => p.id !== id) };
    setData(newData);
    pushToHistory(newData);
  };

  const addCustomSection = (title: string = 'New Section') => {
    const newSec: CustomSection = { id: Date.now().toString(), title, content: '' };
    const newData = { ...data, customSections: [...data.customSections, newSec] };
    setData(newData);
    pushToHistory(newData);
  };

  const updateCustomSection = (id: string, field: keyof CustomSection, value: string) => {
    const newData = { ...data, customSections: data.customSections.map(sec => sec.id === id ? { ...sec, [field]: value } : sec) };
    setData(newData);
    pushToHistory(newData);
  };

  const removeCustomSection = (id: string) => {
    const newData = { ...data, customSections: data.customSections.filter(sec => sec.id !== id) };
    setData(newData);
    pushToHistory(newData);
  };

  const saveResume = () => {
    localStorage.setItem('joblynk_resume_draft', JSON.stringify(data));
    alert('Resume draft saved successfully!');
  };

  const downloadPDF = () => window.print();

  return (
    <div className="max-w-7xl mx-auto py-24 px-6 flex flex-col lg:flex-row gap-12 animate-fade-in no-print">
      {/* EDITOR */}
      <div className="flex-1 space-y-10">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">AI Resume Editor</h2>
            <div className="flex items-center gap-4">
              <p className="text-slate-500 dark:text-slate-400 text-sm">Design & Content Sync.</p>
              <div className="flex items-center gap-2 border-l pl-4 dark:border-slate-800">
                <button 
                  onClick={undo} 
                  disabled={historyIndex === 0} 
                  className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-yellow-500 hover:text-white transition-all disabled:opacity-30"
                  title="Undo (Ctrl+Z)"
                >
                  <i className="fa-solid fa-rotate-left"></i>
                </button>
                <button 
                  onClick={redo} 
                  disabled={historyIndex === history.length - 1} 
                  className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-yellow-500 hover:text-white transition-all disabled:opacity-30"
                  title="Redo (Ctrl+Y)"
                >
                  <i className="fa-solid fa-rotate-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
             <button onClick={saveResume} className="bg-slate-900 dark:bg-slate-800 text-white px-6 py-3 rounded-2xl font-bold hover:bg-yellow-500 hover:text-slate-900 transition-all shadow-xl">
              <i className="fa-solid fa-floppy-disk"></i> Save
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 space-y-10 shadow-2xl relative overflow-hidden">
          {isAIThinking && (
            <div className="absolute inset-0 bg-white/60 dark:bg-slate-900/60 backdrop-blur-[4px] z-50 flex items-center justify-center">
              <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-2xl flex flex-col items-center gap-4 animate-bounce-short">
                <i className="fa-solid fa-wand-magic-sparkles text-5xl text-yellow-500 animate-pulse"></i>
                <p className="font-black text-slate-900 dark:text-white">AI ATS Optimization...</p>
              </div>
            </div>
          )}

          {aiSuggestions && (
            <div className="absolute inset-0 bg-white dark:bg-slate-900 z-50 p-10 flex flex-col animate-fade-in overflow-y-auto">
               <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">AI ATS Variants</h3>
                  <button onClick={() => setAiSuggestions(null)} className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"><i className="fa-solid fa-xmark"></i></button>
               </div>
               <div className="grid gap-6">
                  {aiSuggestions.suggestions.map((s, idx) => (
                    <div key={idx} className="p-6 bg-slate-50 dark:bg-slate-950 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-yellow-500 cursor-pointer group transition-all" onClick={() => applyAISuggestion(s)}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-yellow-500 text-slate-900 px-2 py-0.5 rounded-full text-[8px] font-black uppercase">Variant {idx + 1}</span>
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{idx === 0 ? 'Keyword Optimized' : idx === 1 ? 'Achievement Centric' : 'Leadership Balance'}</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{s}</p>
                      <span className="text-[10px] font-black uppercase text-yellow-600 opacity-0 group-hover:opacity-100 mt-4 block flex items-center gap-2">Use this version <i className="fa-solid fa-arrow-right-long"></i></span>
                    </div>
                  ))}
               </div>
            </div>
          )}

          <section className="space-y-6">
            <h4 className="text-[10px] font-black text-yellow-600 uppercase tracking-[0.4em] border-b dark:border-slate-800 pb-2">Identification</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase ml-1">Full Name</label>
                <input name="name" value={data.name} onChange={handleUpdate} placeholder="Full Name" className="w-full p-4 bg-slate-50 dark:bg-slate-950 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500 transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-black text-slate-400 uppercase ml-1">Target Role</label>
                <input name="role" value={data.role} onChange={handleUpdate} placeholder="Target Role" className="w-full p-4 bg-slate-50 dark:bg-slate-950 dark:text-white border border-slate-200 dark:border-slate-800 rounded-xl outline-none focus:ring-2 focus:ring-yellow-500 transition-all" />
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Professional Summary</label>
              <div className="flex items-center gap-4">
                <span className={`text-[8px] font-black uppercase ${data.summary.length > 300 ? 'text-red-500' : 'text-slate-400'}`}>{data.summary.length} / 320</span>
                <button onClick={() => generateAISuggestion('summary')} className="text-[9px] font-black bg-slate-900 text-yellow-500 px-4 py-1.5 rounded-full flex items-center gap-2 hover:bg-yellow-500 hover:text-slate-900 transition-all"><i className="fa-solid fa-wand-magic-sparkles"></i> ATS Optimization</button>
              </div>
            </div>
            <textarea name="summary" value={data.summary} onChange={handleUpdate} rows={3} className="w-full p-5 bg-slate-50 dark:bg-slate-950 dark:text-white border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-yellow-500 resize-none leading-relaxed transition-all" />
          </section>

          <section className="space-y-6">
            <div className="flex justify-between items-center border-b dark:border-slate-800 pb-2">
              <h4 className="text-[10px] font-black text-yellow-600 uppercase tracking-[0.4em]">Work Experience</h4>
              <button onClick={addExperience} className="text-[10px] font-black bg-slate-900 dark:bg-slate-800 text-white px-4 py-2 rounded-xl hover:bg-yellow-500 hover:text-slate-900 transition-all uppercase tracking-widest">+ Add Role</button>
            </div>
            {data.experiences.map((exp) => (
              <div key={exp.id} className="p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 relative group hover:border-yellow-500/30 transition-all">
                <button onClick={() => removeExperience(exp.id)} className="absolute top-4 right-4 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><i className="fa-solid fa-trash-can"></i></button>
                <div className="grid md:grid-cols-2 gap-4">
                  <input placeholder="Job Title" value={exp.title} onChange={(e) => updateExperience(exp.id, 'title', e.target.value)} className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none focus:ring-1 focus:ring-yellow-500 font-bold" />
                  <input placeholder="Company" value={exp.company} onChange={(e) => updateExperience(exp.id, 'company', e.target.value)} className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none focus:ring-1 focus:ring-yellow-500" />
                </div>
                <div className="flex justify-between items-center">
                  <input placeholder="Dates" value={exp.dates} onChange={(e) => updateExperience(exp.id, 'dates', e.target.value)} className="flex-1 p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none focus:ring-1 focus:ring-yellow-500 mr-2" />
                  <button onClick={() => generateAISuggestion('experience', exp)} className="text-[9px] font-black bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-4 py-2 rounded-xl hover:bg-yellow-500 hover:text-slate-900 transition-all uppercase">AI Variations</button>
                </div>
                <textarea placeholder="Achievements..." value={exp.description} onChange={(e) => updateExperience(exp.id, 'description', e.target.value)} rows={2} className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none focus:ring-1 focus:ring-yellow-500 resize-none leading-relaxed" />
              </div>
            ))}
          </section>

          <section className="space-y-6">
            <div className="flex justify-between items-center border-b dark:border-slate-800 pb-2">
              <h4 className="text-[10px] font-black text-yellow-600 uppercase tracking-[0.4em]">Portfolio Projects</h4>
              <button onClick={addProject} className="text-[10px] font-black bg-slate-900 dark:bg-slate-800 text-white px-4 py-2 rounded-xl hover:bg-yellow-500 hover:text-slate-900 transition-all uppercase tracking-widest">+ Add Project</button>
            </div>
            {data.projects.map((p) => (
              <div key={p.id} className="p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 relative group">
                <button onClick={() => removeProject(p.id)} className="absolute top-4 right-4 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><i className="fa-solid fa-trash-can"></i></button>
                <div className="grid md:grid-cols-2 gap-4">
                  <input placeholder="Project Title" value={p.title} onChange={(e) => updateProject(p.id, 'title', e.target.value)} className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none focus:ring-1 focus:ring-yellow-500 font-bold" />
                  <input placeholder="Dates" value={p.dates} onChange={(e) => updateProject(p.id, 'dates', e.target.value)} className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none focus:ring-1 focus:ring-yellow-500" />
                </div>
                <textarea placeholder="Project Scope & Impact..." value={p.description} onChange={(e) => updateProject(p.id, 'description', e.target.value)} rows={2} className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none focus:ring-1 focus:ring-yellow-500 resize-none leading-relaxed" />
              </div>
            ))}
          </section>

          <section className="space-y-4">
             <div className="flex justify-between items-center border-b dark:border-slate-800 pb-2">
              <h4 className="text-[10px] font-black text-yellow-600 uppercase tracking-[0.4em]">Expertise Tags</h4>
              <button onClick={() => generateAISuggestion('skills')} className="text-[9px] font-black bg-slate-900 text-yellow-500 px-4 py-1.5 rounded-full flex items-center gap-2 hover:bg-yellow-500 hover:text-slate-900 transition-all"><i className="fa-solid fa-lightbulb"></i> AI Skills Suggest</button>
             </div>
             <div className="flex flex-wrap gap-2 p-5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl min-h-[60px]">
                {data.skills.map(s => (
                  <span key={s} className="bg-slate-900 dark:bg-slate-800 text-white text-[10px] font-black px-4 py-2 rounded-2xl flex items-center gap-3 animate-scale-in">
                    {s}
                    <button onClick={() => removeSkill(s)} className="text-slate-500 hover:text-yellow-500 transition-colors"><i className="fa-solid fa-circle-xmark"></i></button>
                  </span>
                ))}
             </div>
             <form onSubmit={addSkill} className="flex gap-2">
                <input value={skillInput} onChange={(e) => setSkillInput(e.target.value)} placeholder="Type skill (e.g. Leadership)" className="flex-1 p-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl outline-none focus:ring-2 focus:ring-yellow-500" />
                <button type="submit" className="bg-yellow-500 text-slate-900 px-8 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-yellow-400 transition-all">ADD</button>
             </form>
          </section>

          <section className="space-y-6">
            <div className="flex justify-between items-center border-b dark:border-slate-800 pb-2">
              <h4 className="text-[10px] font-black text-yellow-600 uppercase tracking-[0.4em]">Additional Assets</h4>
              <div className="flex gap-2">
                <button onClick={() => addCustomSection('Awards & Recognition')} className="text-[9px] font-black bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl hover:bg-yellow-500/10 transition-all">+ Awards</button>
                <button onClick={() => addCustomSection()} className="text-[9px] font-black bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-xl hover:bg-yellow-500/10 transition-all">+ Custom Section</button>
              </div>
            </div>
            {data.customSections.map((sec) => (
              <div key={sec.id} className="p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 relative group">
                <button onClick={() => removeCustomSection(sec.id)} className="absolute top-6 right-6 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"><i className="fa-solid fa-trash-can"></i></button>
                <input placeholder="Section Title" value={sec.title} onChange={(e) => updateCustomSection(sec.id, 'title', e.target.value)} className="w-full p-4 font-black bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none uppercase tracking-widest text-xs" />
                <textarea placeholder="List details..." value={sec.content} onChange={(e) => updateCustomSection(sec.id, 'content', e.target.value)} rows={2} className="w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none resize-none transition-all" />
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* PREVIEW */}
      <div className="lg:w-[500px] space-y-8 sticky top-28">
        <div className="flex flex-wrap gap-2 bg-white dark:bg-slate-900 p-2.5 rounded-[1.5rem] border border-slate-200 dark:border-slate-800 shadow-xl">
          {(['Classic', 'Modern', 'Premium', 'Creative', 'Minimalist'] as Template[]).map(t => (
            <button key={t} onClick={() => setTemplate(t)} className={`flex-1 min-w-[85px] py-2.5 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${template === t ? 'bg-yellow-500 text-slate-900 shadow-lg scale-105' : 'text-slate-400 hover:text-slate-600'}`}>{t}</button>
          ))}
        </div>

        <div id="resume-preview" ref={resumeRef} className={`aspect-[1/1.414] bg-white text-slate-900 shadow-2xl rounded-2xl transition-all overflow-hidden relative ${
          template === 'Classic' ? 'border-t-8 border-slate-900 p-10' : 
          template === 'Modern' ? 'border-t-8 border-yellow-500 p-10' : 
          template === 'Premium' ? 'border-t-8 border-blue-900 p-10' : 
          template === 'Creative' ? 'p-0 flex bg-slate-50' : 
          'border border-slate-50 p-10'
        }`}>
          {template === 'Creative' ? (
            /* CREATIVE TEMPLATE UNIQUE LAYOUT */
            <div className="flex w-full h-full">
               {/* SIDEBAR */}
               <div className="w-[35%] bg-slate-900 text-white p-8 flex flex-col gap-10">
                  <div className="space-y-4">
                     <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center font-black text-3xl text-slate-900">
                        {data.name[0]}
                     </div>
                     <div>
                        <h1 className="text-xl font-black uppercase tracking-tighter leading-none">{data.name.split(' ')[0]}</h1>
                        <h1 className="text-xl font-black uppercase tracking-tighter text-yellow-500">{data.name.split(' ').slice(1).join(' ')}</h1>
                     </div>
                  </div>

                  <div className="space-y-6">
                    <section className="space-y-2">
                       <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-1">Contact</h4>
                       <div className="space-y-2 text-[8px] font-bold">
                          <p className="flex items-center gap-2"><i className="fa-solid fa-envelope text-yellow-500"></i> {data.email}</p>
                          <p className="flex items-center gap-2"><i className="fa-solid fa-phone text-yellow-500"></i> {data.phone}</p>
                       </div>
                    </section>

                    <section className="space-y-3">
                       <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-1">Expertise</h4>
                       <div className="flex flex-wrap gap-1.5">
                          {data.skills.map(s => (
                            <span key={s} className="bg-slate-800 px-2 py-1 rounded-md text-[7px] font-bold uppercase tracking-widest">{s}</span>
                          ))}
                       </div>
                    </section>

                    {data.customSections.map(sec => (
                      <section key={sec.id} className="space-y-2">
                        <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-1">{sec.title}</h4>
                        <p className="text-[8px] leading-relaxed text-slate-300 whitespace-pre-line">{sec.content}</p>
                      </section>
                    ))}
                  </div>
               </div>

               {/* MAIN BODY */}
               <div className="flex-1 bg-white p-10 flex flex-col gap-8">
                  <header>
                    <p className="text-yellow-600 font-black uppercase text-[10px] tracking-[0.4em] mb-1">{data.role}</p>
                    <div className="w-12 h-1 bg-slate-900"></div>
                  </header>

                  <section className="space-y-2">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                       <i className="fa-solid fa-user-tie text-yellow-500"></i> Profile
                    </h4>
                    <p className="text-[10px] leading-relaxed text-slate-600 font-medium italic">"{data.summary}"</p>
                  </section>

                  <section className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                       <i className="fa-solid fa-briefcase text-yellow-500"></i> Experience
                    </h4>
                    <div className="space-y-6 border-l-2 border-slate-50 ml-1 pl-4">
                       {data.experiences.map(exp => (
                        <div key={exp.id} className="relative">
                          <div className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-slate-200 border-2 border-white"></div>
                          <div className="flex justify-between items-baseline mb-1">
                             <p className="text-[11px] font-black text-slate-900">{exp.title}</p>
                             <span className="text-[8px] font-black text-slate-300">{exp.dates}</span>
                          </div>
                          <p className="text-[9px] font-bold text-slate-400 mb-1">{exp.company}</p>
                          <p className="text-[9px] leading-relaxed text-slate-600 font-medium whitespace-pre-line">{exp.description}</p>
                        </div>
                       ))}
                    </div>
                  </section>

                  {data.projects.length > 0 && (
                    <section className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                        <i className="fa-solid fa-diagram-project text-yellow-500"></i> Selected Projects
                      </h4>
                      <div className="space-y-4">
                         {data.projects.map(p => (
                          <div key={p.id} className="bg-slate-50 p-4 rounded-2xl">
                             <p className="text-[10px] font-black text-slate-900 mb-1">{p.title}</p>
                             <p className="text-[9px] leading-relaxed text-slate-500 font-medium">{p.description}</p>
                          </div>
                         ))}
                      </div>
                    </section>
                  )}

                  <footer className="mt-auto pt-8 border-t border-slate-50 text-center">
                    <p className="text-[7px] font-black text-slate-200 uppercase tracking-[0.5em]">Joblynk.live Pro Builder</p>
                  </footer>
               </div>
            </div>
          ) : (
            /* STANDARD TEMPLATES */
            <div className="h-full flex flex-col font-sans">
              {template === 'Modern' ? (
                <div className="flex justify-between items-start mb-8">
                  <div className="space-y-1">
                    <h1 className="text-3xl font-black uppercase tracking-tighter leading-none">{data.name.split(' ')[0]} <span className="text-yellow-500">{data.name.split(' ').slice(1).join(' ')}</span></h1>
                    <p className="text-slate-400 font-black uppercase text-[9px] tracking-[0.3em]">{data.role}</p>
                  </div>
                  <div className="text-right text-[8px] text-slate-500 font-bold uppercase tracking-widest space-y-1">
                    <p className="text-slate-900">{data.email}</p>
                    <p>{data.phone}</p>
                  </div>
                </div>
              ) : template === 'Premium' ? (
                 <div className="bg-slate-900 -mx-10 -mt-10 p-12 text-white mb-10 shadow-lg">
                  <h1 className="text-4xl font-black tracking-tight">{data.name}</h1>
                  <p className="text-yellow-500 font-black uppercase tracking-[0.4em] text-[10px] mt-3">{data.role}</p>
                  <div className="mt-6 flex gap-8 text-[9px] font-bold uppercase tracking-widest opacity-60">
                    <span>{data.email}</span>
                    <span>{data.phone}</span>
                  </div>
                </div>
              ) : (
                <div className="border-b-2 pb-8 border-slate-100 mb-10">
                  <h1 className="text-3xl font-black uppercase text-slate-900 tracking-tight leading-none">{data.name}</h1>
                  <p className="text-slate-500 font-black mt-2 tracking-[0.3em] uppercase text-[10px]">{data.role}</p>
                  <div className="flex gap-6 text-[9px] font-bold text-slate-400 mt-4 uppercase tracking-widest">
                    <span>{data.email}</span>
                    <span>{data.phone}</span>
                  </div>
                </div>
              )}

              <div className="flex-1 space-y-8 overflow-hidden">
                 <div className="space-y-2">
                   <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Professional Summary</h4>
                   <p className="text-[10px] leading-relaxed text-slate-700 font-medium">{data.summary}</p>
                 </div>

                 <div className="space-y-4">
                   <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Work Experience</h4>
                   <div className="space-y-6">
                      {data.experiences.map(exp => (
                        <div key={exp.id} className="space-y-1 relative">
                          <div className="flex justify-between items-baseline">
                            <p className="text-[11px] font-black text-slate-900">{exp.title}</p>
                            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{exp.dates}</span>
                          </div>
                          <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{exp.company}</p>
                          <p className="text-[9px] leading-relaxed text-slate-600 whitespace-pre-line font-medium">{exp.description}</p>
                        </div>
                      ))}
                   </div>
                 </div>

                 {data.projects.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Key Projects</h4>
                    <div className="space-y-4">
                      {data.projects.map(p => (
                        <div key={p.id} className="space-y-1">
                          <div className="flex justify-between items-baseline">
                            <p className="text-[11px] font-black text-slate-900">{p.title}</p>
                            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{p.dates}</span>
                          </div>
                          <p className="text-[9px] leading-relaxed text-slate-600 font-medium">{p.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                 )}

                 <div className="space-y-3">
                   <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Expertise</h4>
                   <div className="flex flex-wrap gap-2.5">
                      {data.skills.map(s => (
                        <span key={s} className="text-[8px] font-black px-3 py-1.5 rounded-lg border uppercase tracking-widest bg-slate-50 border-slate-100 text-slate-700">
                          {s}
                        </span>
                      ))}
                   </div>
                 </div>

                 <div className="space-y-8">
                  {data.customSections.map(sec => (
                    <div key={sec.id} className="space-y-2">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{sec.title}</h4>
                      <p className="text-[10px] leading-relaxed text-slate-700 whitespace-pre-line font-medium">{sec.content}</p>
                    </div>
                  ))}
                 </div>
              </div>

              <div className="mt-auto pt-8 border-t border-slate-50 text-center">
                 <div className="text-[8px] font-black text-slate-200 uppercase tracking-[0.5em]">Verified Profile by Joblynk.live</div>
              </div>
            </div>
          )}
        </div>
        
        <button onClick={downloadPDF} className="w-full bg-yellow-500 text-slate-900 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-4 group">
          <i className="fa-solid fa-cloud-arrow-down text-2xl group-hover:translate-y-1 transition-transform"></i> 
          <div className="text-left">
            <p className="leading-none text-xl">Generate PDF</p>
            <p className="text-[10px] uppercase font-black opacity-60 tracking-widest mt-1">ATS Ready Copy (₹49)</p>
          </div>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body * { visibility: hidden; background: white !important; }
          .no-print { display: none !important; }
          #resume-preview, #resume-preview * { visibility: visible; }
          #resume-preview { 
            position: fixed; 
            left: 0; 
            top: 0; 
            width: 100vw; 
            height: 100vh; 
            margin: 0; 
            padding: 1cm; 
            box-shadow: none; 
            border: none !important; 
          }
          @page { size: A4; margin: 0; }
        }
        @keyframes bounce-short { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .animate-bounce-short { animation: bounce-short 1.5s ease-in-out infinite; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
        @keyframes scale-in { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-scale-in { animation: scale-in 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}} />
    </div>
  );
};

export default ResumeBuilder;
