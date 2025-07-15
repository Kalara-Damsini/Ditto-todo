import React, { useState, useEffect } from "react";
import './Addform.css';
import { LuAlarmClock } from "react-icons/lu";

export interface Task {
  title: string;
  date: string;
  time: string;
  status: string;
  priority: string;
  description: string;
  document: string | null; // this will be a blob URL
}

const Addform: React.FC<{ onSubmit: (task: Task) => void, initialData?: Task }> = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const [ampm, setAmpm] = useState('AM');
  const [showPicker, setShowPicker] = useState(false);
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');
  const [document, setDocument] = useState<File | null>(null);
  const [documentUrl, setDocumentUrl] = useState<string | null>(null);

 
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDate(initialData.date);
      setDescription(initialData.description);
      setPriority(initialData.priority);
      setStatus(initialData.status);
      setDocumentUrl(initialData.document);

      
      const [timePart, ampmPart] = initialData.time.split(" ");
      const [h, m] = timePart.split(":");
      setHour(h);
      setMinute(m);
      setAmpm(ampmPart);
    }
  }, [initialData]);

  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setDocument(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setDocumentUrl(url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !priority) {
      alert("Title and priority are required");
      return;
    }

    const newTask: Task = {
      title,
      date,
      time: `${hour}:${minute} ${ampm}`,
      status,
      priority,
      description,
      document: documentUrl
    };

    onSubmit(newTask);

    
    setTitle('');
    setDate('');
    setHour('00');
    setMinute('00');
    setAmpm('AM');
    setStatus('');
    setPriority('');
    setDescription('');
    setDocument(null);
    setDocumentUrl(null);
  };

  return (
    <div className="add-form-container">
      <form onSubmit={handleSubmit}>
        <div className="day">
          <div className="title">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="date">
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
        </div>

        <div className="cont1">
          <div className="time">
            <label>Time</label>
            <div className="time-input-container" onClick={() => setShowPicker(!showPicker)}>
              <input type="text" readOnly value={`${hour}:${minute} ${ampm}`} />
              <LuAlarmClock className="clock" />
            </div>
            {showPicker && (
              <div className="time-picker-dropdown">
                <select value={hour} onChange={e => setHour(e.target.value)}>
                  {Array.from({ length: 12 }, (_, i) => (i+1).toString().padStart(2,'0')).map(h => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
                <span>:</span>
                <select value={minute} onChange={e => setMinute(e.target.value)}>
                  {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2,'0')).map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <select value={ampm} onChange={e => setAmpm(e.target.value)}>
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            )}
          </div>

          <div className="status">
            <label>Status</label>
            <div className="radio-group">
              <label><input type="radio" name="status" value="Pending" checked={status==='Pending'} onChange={e=>setStatus(e.target.value)} /> Pending</label>
              <label><input type="radio" name="status" value="In Progress" checked={status==='In Progress'} onChange={e=>setStatus(e.target.value)} /> In Progress</label>
              <label><input type="radio" name="status" value="Completed" checked={status==='Completed'} onChange={e=>setStatus(e.target.value)} /> Completed</label>
            </div>
          </div>
        </div>

        <div className="priority">
          <label>Priority</label>
          <div className="radio-group">
            <label><input type="radio" name="priority" value="Extreme" checked={priority==='Extreme'} onChange={e=>setPriority(e.target.value)} required /> Extreme</label>
            <label><input type="radio" name="priority" value="Moderate" checked={priority==='Moderate'} onChange={e=>setPriority(e.target.value)} required /> Moderate</label>
            <label><input type="radio" name="priority" value="Low" checked={priority==='Low'} onChange={e=>setPriority(e.target.value)} required /> Low</label>
          </div>
        </div>

        <div className="cont2">
          <div className="description">
            <label>Task Description</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} />
          </div>
          <div className="document">
            <label>Upload Document</label>
            <input type="file" onChange={handleFileChange} />
            {documentUrl && (
              <p style={{ marginTop: '0.5rem' }}>
                <a href={documentUrl} target="_blank" rel="noopener noreferrer">📄 View Uploaded Document</a>
              </p>
            )}
          </div>
        </div>

        <div className="cont3">
          <div className="done-btn">
            <button type="submit">Done</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Addform;
