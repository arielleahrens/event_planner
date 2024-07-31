import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className="description">
                <p>Plan your events here! We handle a variety of event types from social to entertainment to community events.</p>
                <button className="get-started-button">Let's get started!</button>
            </section>
            <section className="events_categories">
                <ul>
                    <h2>Social Events</h2>
                    <li>Birthdays</li>
                    <li>Weddings</li>
                    <li>Graduations</li>
                    <li>Baby Showers</li>
                    <li>Reunions</li>
                </ul>
                <ul>
                    <h2>Entertainment Events</h2>
                    <li>Concerts</li>
                    <li>Festivals</li>
                    <li>Movie Screenings</li>
                    <li>Exhibitions</li>
                    <li>Shows</li>
                </ul>
                <ul>
                    <h2>Community Events</h2>
                    <li>Fundraisers</li>
                    <li>Block Parties</li>
                    <li>Cultural Celebrations</li>
                </ul>
            </section>
            <section className="features">
                <h2>Features</h2>
                <ul>
                    <li>Easy creation and management of event</li>
                    <li>Customizable templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration with Event Planner</li>
                    <li>Reminders and notifications</li>
                </ul>
            </section>
            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                    <p className="author">- Emily Johnson</p>
                </div>
                <div className="testimonial">
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className="author">- John Smith</p>
                </div>
            </section>
            <section className="contact">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Enter text here."></textarea>
                    <button className="submit-button">Send</button>
                </form>
            </section>
        </div>
    );
};

export default EventPlanner;
