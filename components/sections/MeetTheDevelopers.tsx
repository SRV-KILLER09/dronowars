import React, { useState } from 'react';
import Image from 'next/image';
import styles from './MeetTheDevelopers.module.css';

const developers = [
  {
    name: 'Rakshit Suneja',
    role: 'Creative Head',
    group: 'Heads',
    img: '/devs/rakshit.jpg',
  },
  {
    name: 'Yasharth Singh',
    role: 'Management Head',
    group: 'Heads',
    img: '/devs/yasharth.jpg',
  },
  {
    name: 'Vaibhav Katariya',
    role: 'Head Events',
    group: 'Heads',
    img: '/devs/vaibhav.jpg',
  },
  {
    name: 'Mohammed Ali',
    role: 'Outreach Head',
    group: 'Heads',
    img: '/devs/ali.jpg',
  },
  {
    name: 'Vardaan Saxena',
    role: 'Web Developer',
    group: 'Web Developers',
    img: '/devs/vardaan.jpg',
  },
  {
    name: 'Ansh Mahajan',
    role: 'Web Developer',
    group: 'Web Developers',
    img: '/devs/ansh.jpg',
  },
  {
    name: 'Shourya Singh',
    role: 'Web Developer',
    group: 'Web Developers',
    img: '/devs/shourya.jpg',
  },
];

const groups = ['All', 'Heads', 'Web Developers'];

export default function MeetTheDevelopers() {
  const [selectedGroup, setSelectedGroup] = useState('All');

  const filteredDevs =
    selectedGroup === 'All'
      ? developers
      : developers.filter((dev) => dev.group === selectedGroup);

  return (
    <section className={styles.meetSection} id="meet-the-developers">
      <h2 className={styles.heading}>Meet the Developers</h2>
      <div className={styles.buttonRow}>
        {groups.map((group) => (
          <button
            key={group}
            className={
              selectedGroup === group
                ? styles.activeButton
                : styles.groupButton
            }
            onClick={() => setSelectedGroup(group)}
          >
            {group}
          </button>
        ))}
      </div>
      <div className={styles.devsGrid}>
        {filteredDevs.map((dev) => (
          <div className={styles.devCard} key={dev.name}>
            <div className={styles.imgWrapper}>
              <Image
                src={dev.img}
                alt={dev.name}
                width={160}
                height={160}
                className={styles.devImg}
              />
              <span className={styles.overlay}></span>
            </div>
            <div className={styles.devInfo}>
              <span className={styles.devName}>{dev.name}</span>
              {dev.role && <span className={styles.devRole}>{dev.role}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
