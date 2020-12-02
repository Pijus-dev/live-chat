import React, { useRef, useEffect } from "react";

import Message from "../message/Message";

import styles from "./infobar.module.scss";

const InfoBar = ({
  room,
  setMessage,
  message,
  handleSubmit,
  messages,
  name,
  users,
}) => {
  const endOfMessages = useRef(null);
  const scrollToBottom = () => {
    endOfMessages.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);
  return (
    <div className={styles.chatWrapper}>
      <div className={styles.chatUsers}>
        <div className={styles.activeUsers}>
          <i class="fas fa-users"></i>
          <h3>Users</h3>
        </div>
        {users.map((user) => (
          <div key={user.name} className={styles.users}>
            <p> {user.name}</p>
            <span></span>
          </div>
        ))}
      </div>
      <div className={styles.activeChat}>
        <div className={styles.chatInfo}>
          <h3>{room}</h3>
          <a href="/">
            <span>&#10008;</span>
          </a>
        </div>
        <div className={styles.chatContent}>
          {messages.map((text, idx) => (
            <div key={idx}>
              <Message message={text} name={name} />
            </div>
          ))}
          <div ref={endOfMessages}></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.sendInput}>
            <input
              type="text"
              value={message}
              placeholder="type your message here"
              onChange={setMessage}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InfoBar;
