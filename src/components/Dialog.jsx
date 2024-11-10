// import React from "react";
import StyleSheet from "../assets/Styles/Dailog.module.css";
import DialogImg from "../assets/images/illustration-article.svg";
import UserImg from "../assets/images/image-avatar.webp";

export default function Dialog() {
  return (
    <dialog open className={`${StyleSheet.center} ${StyleSheet.modal}`}>
      <div className={StyleSheet.container}>
        <img
          src={DialogImg}
          className={StyleSheet.blogImage}
          alt="Image with HTML tag sign"
        />
        <div className={StyleSheet.content}>
          <p className={StyleSheet.category}>Learning</p>
          <p className={StyleSheet.publishmentDate}>Published 21 Dec 2023</p>
          <a href="#" className={StyleSheet.title}>
            HTML & CSS foundations
          </a>
          <p className={StyleSheet.description}>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className={StyleSheet.author}>
          <img
            src={UserImg}
            className={StyleSheet.userPic}
            alt="User Picture"
          />
          <span className={StyleSheet.authorName}>Greg Hooper</span>
        </div>
      </div>
    </dialog>
  );
}
