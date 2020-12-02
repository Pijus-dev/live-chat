import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import io from "socket.io-client";

import styles from "./join.module.scss";

let socket;

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [rooms, setRooms] = useState([]);

  const ENDPOINT = "http://localhost:5000";

  const filteredRooms = rooms.filter(
    (val, idx, array) => array.findIndex((t) => t === val) === idx
  );

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.on("rooms", ({ room }) => {
      setRooms(room);
    });
  }, []);

  return (
    <div className="container">
      <div className={styles.joinWrapper}>
        <div className={styles.availableRooms}>
          <h3>Available rooms</h3>
          {filteredRooms.map((room, idx) => (
            <div className={styles.room} key={idx}>
              <p>{room}</p>
              <i class="fas fa-comments"></i>
            </div>
          ))}
        </div>
        <div className={styles.join}>
          <div className={styles.joinRoom}>
            <h3>Join the room</h3>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <input
                placeholder="Enter the room name"
                type="text"
                onChange={(e) => setRoom(e.target.value)}
              />
            </div>
            <Link
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}`}
            >
              <button>Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
