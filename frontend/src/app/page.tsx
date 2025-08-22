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
                <div className="post">
                    <p>
                        We offer post-psychedelic experience integration
                        coaching.
                    </p>
                </div>
                <h3>
                    Book a free 30-minute integration session with me through
                    Calendly.
                </h3>
                <div className="calendly">
                    <a
                        href="https://calendly.com/soren807-d/30-minute-trip-integration-coaching-session"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book Now
                    </a>
                </div>
                <div className="treatment">
                    <p>Psychedelic medicines can be taken to treat:</p>
                    <ul>
                        <li>Anxiety</li>
                        <li>Depression</li>
                        <li>PTSD</li>
                        <li>Substance Use Disorders</li>
                        <li>End-of-Life Anxiety</li>
                        <li>Obsessive-Compulsive Disorder</li>
                        <li>Chronic Pain</li>
                    </ul>
                </div>
                <p className="copyright">
                    Copyright &#169; 2025 Lucidity Psychedelic Trip Integration
                </p>
            </div>
        </>
    );
}
