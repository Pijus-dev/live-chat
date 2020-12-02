import React from "react";

import ReactEmoji from "react-emoji";
import styles from "./message.module.scss";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className={`${styles.messageContainer} ${styles.justifyEnd}`}>
      <div className={styles.user1}>
        <p>{trimmedName}</p>
      </div>
      <div className={styles.text1}>
        <p>{ReactEmoji.emojify(text)}</p> 
      </div>
    </div>
  ) : (
    <div className={`${styles.messageContainer} ${styles.justifyStart}`}>
      <div className={styles.messageText}>
        <p>{ReactEmoji.emojify(text)}</p>
      </div>
      <div className={styles.user}>
        <p>{user}</p>
      </div>
    </div>
  );
};

export default Message;
