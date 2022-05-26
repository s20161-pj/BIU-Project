import React, { useState } from "react";

import "./ContactComponent.css";

export default function ContactComponent() {
  const [from, setSender] = useState("");
  const [to, setRecipient] = useState("");
  const [messageSubject, setMessageSubject] = useState("");
  const [messageContent, setMessageContent] = useState("");

  return (
    <div className="contact">
      <h2>Nowa wiadomość</h2>
      <form className="contactForm">
        <label>Od</label>
        <input
          type="text"
          required
          value={from}
          onChange={(e) => setSender(e.target.value)}
        />
        <label>Do</label>
        <input
          type="text"
          required
          value={to}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <label>Temat</label>
        <input
          type="text"
          required
          value={messageSubject}
          onChange={(e) => setMessageSubject(e.target.value)}
        />
        <label>Treść wiadomości</label>
        <input
          type="textarea"
          required
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
        />
        <p>{from}</p>
        <p>{to}</p>
        <p>{messageSubject}</p>
        <p>{messageContent}</p>
      </form>
    </div>
  );
};
