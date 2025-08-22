import "./homeStyles.css";
// Home Page
export default function Home() {
    return (
        <>
            <div className="container">
                <div className="header">
                    <h1>Lucidity</h1>
                </div>
                <div className="subheader">
                    <h2>Psychedelic Trip Integration</h2>
                </div>
                <p>Post-psychedelic experience integration coaching.</p>
                <h3>
                    Book a 30-minute integration session with me through
                    Calendly:
                </h3>
                <a
                    href="https://calendly.com/lucidity-integration/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Book Now
                </a>
                <div className="about">
                    <h4>About Me:</h4>
                    <p>Medical student &rarr; Software Engineer</p>
                </div>
                <div className="treatment">
                    <p>Psychedelic medicines can treat, and sometimes cure:</p>
                    <ul>
                        <li>Anxiety</li>
                        <li>Depression</li>
                        <li>PTSD</li>
                        <li>Addiction (Substance Use Disorders)</li>
                        <li>End-of-Life Anxiety</li>
                        <li>Obsessive-Compulsive Disorder</li>
                        <li>Chronic Pain</li>
                    </ul>
                </div>
                <p className="copyright">
                    &#169; Lucidity Psychedelic Trip Integration
                </p>
            </div>
        </>
    );
}
