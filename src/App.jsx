import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Camera, Clapperboard, Gamepad2, Mail, MessageCircle, MonitorPlay, Play, Sparkles, UserRound, X } from 'lucide-react'
import { getYoutubeId, horizontalVideos, verticalVideos } from './data/projects'
import './App.css'

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedProject])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Lakshmi Mohan Rao home"><span>LMR</span><small>EDITING STUDIO</small></a>
        <nav className="nav-links" aria-label="Main navigation"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <a className="header-cta" href="mailto:pasupuletimohan651@gmail.com">Let's talk <ArrowUpRight size={15} /></a>
      </header>

      <main id="top">
        <section className="hero-section page-section"><div className="hero-copy reveal-up"><p className="eyebrow"><span className="status-dot" /> Available for select projects</p><h1>Video Editor for<br /><em>YouTube &amp; Reels</em></h1><p className="hero-description">I edit engaging short-form videos, reels, and YouTube content with clean cuts, captions, effects, and strong pacing.</p><div className="hero-actions"><a className="button button-primary" href="#work">View my work <ArrowUpRight size={17} /></a><a className="button button-ghost" href="#contact">Contact me</a></div></div><div className="hero-mark" aria-hidden="true"><div className="mark-inner"><Clapperboard size={32} strokeWidth={1.2} /><span>SHORT<br />FORM<br />STORY</span></div><div className="mark-line" /></div></section>

        <section id="work" className="work-section page-section"><div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>A few things I've<br /><em>put in motion.</em></h2></div><p className="section-note">A selection of edits made to hold attention,<br />tell a story, and feel good to watch.</p></div><WorkCarousel title="Horizontal Videos" videos={horizontalVideos} onSelect={setSelectedProject} /><WorkCarousel title="Vertical Videos" videos={verticalVideos} onSelect={setSelectedProject} vertical /></section>

        <section id="services" className="services-section page-section"><div className="section-heading compact"><div><p className="eyebrow">What I do</p><h2>Editing that keeps<br /><em>people watching.</em></h2></div><p className="section-note">From the first frame to the final<br />caption, every cut has a job.</p></div><div className="services-grid"><Service icon={<MonitorPlay size={22} />} title="YouTube Shorts" text="High-energy edits built for retention and replay." /><Service icon={<Sparkles size={22} />} title="Instagram Reels" text="Polished, on-brand stories made to stop the scroll." /><Service icon={<UserRound size={22} />} title="Talking Head Videos" text="Clear, confident edits with captions that land." /><Service icon={<Gamepad2 size={22} />} title="Gaming / Entertainment" text="Big moments, sharp timing, and sound that hits." /></div></section>

        <section id="about" className="about-section page-section"><div className="about-label"><p className="eyebrow">A little about me</p><div className="about-stamp"><Clapperboard size={20} /> LMR / 2024</div></div><div className="about-copy"><p>Hi, I'm <strong>Lakshmi Mohan Rao</strong>, a video editor focused on creating clean, engaging, and fast-paced content for YouTube and social media.</p><span className="about-rule" /><p className="location">Based in Hyderabad, India<br />Working with creators everywhere.</p></div></section>

        <section id="contact" className="contact-section page-section"><p className="eyebrow">Have a project in mind?</p><h2>Have a video you want edited?<br /><em>Let's work together.</em></h2><div className="contact-actions"><a href="mailto:pasupuletimohan651@gmail.com" className="contact-link"><Mail size={19} /> Email me <ArrowUpRight size={15} /></a><a href="https://wa.me/916305302725" target="_blank" rel="noreferrer" className="contact-link"><MessageCircle size={19} /> WhatsApp <ArrowUpRight size={15} /></a><a href="https://instagram.com" target="_blank" rel="noreferrer" className="contact-link"><Camera size={19} /> Instagram <ArrowUpRight size={15} /></a></div></section>
      </main>

      <footer className="site-footer"><span>© 2024 Lakshmi Mohan Rao</span><span className="footer-center">Made with intention / Cut with care</span><div><a href="https://youtube.com" target="_blank" rel="noreferrer"><Play size={17} /></a><a href="https://instagram.com" target="_blank" rel="noreferrer"><Camera size={17} /></a></div></footer>
      {selectedProject && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><div className="video-modal" role="dialog" aria-modal="true" aria-label={selectedProject.title} onClick={(event) => event.stopPropagation()}><button className="modal-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Close video"><X size={20} /></button><div className="video-frame"><iframe src={`https://www.youtube.com/embed/${getYoutubeId(selectedProject.youtubeUrl)}?autoplay=1&rel=0`} title={selectedProject.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /></div><div className="modal-title"><span>{selectedProject.category}</span><h3>{selectedProject.title}</h3></div></div></div>}
    </div>
  )
}

function Service({ icon, title, text }) { return <div className="service-item"><div className="service-icon">{icon}</div><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="service-arrow" size={17} /></div> }

function WorkCarousel({ title, videos, onSelect, vertical = false }) {
  const scrollByCard = (direction) => {
    document.getElementById(`${title.toLowerCase().replace(' ', '-')}-carousel`)?.scrollBy({ left: direction * 360, behavior: 'smooth' })
  }

  return <div className={`work-carousel ${vertical ? 'vertical-carousel' : ''}`}><div className="carousel-heading"><h3>{title}</h3><div className="carousel-controls"><button type="button" onClick={() => scrollByCard(-1)} aria-label={`Previous ${title}`}><ArrowLeft size={16} /></button><button type="button" onClick={() => scrollByCard(1)} aria-label={`Next ${title}`}><ArrowRight size={16} /></button></div></div><div id={`${title.toLowerCase().replace(' ', '-')}-carousel`} className="carousel-track">{videos.map((project, index) => <article className="project-card" key={project.title}><button className="thumbnail-button" type="button" onClick={() => onSelect(project)} aria-label={`Watch ${project.title}`}><img src={`https://img.youtube.com/vi/${getYoutubeId(project.youtubeUrl)}/hqdefault.jpg`} alt="" /><span className="play-badge"><Play size={16} fill="currentColor" /></span><span className="card-number">0{index + 1}</span></button><div className="project-info"><div><p className="project-category">{project.category}</p><h3>{project.title}</h3></div><button className="watch-link" type="button" onClick={() => onSelect(project)}>Watch video <ArrowUpRight size={15} /></button><p className="project-description">{project.description}</p></div></article>)}</div></div>
}

export default App
