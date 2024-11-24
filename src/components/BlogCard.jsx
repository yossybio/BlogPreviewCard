import StyleSheet from "../assets/Styles/BlogCard.module.css";
import CardImg from "../assets/images/illustration-article.svg";
import UserImg from "../assets/images/image-avatar.webp";

export default function BlogCard() {
  return (
    <dialog open className={`${StyleSheet.center} ${StyleSheet.modal}`}>
      <div className={StyleSheet.container}>
        <img
          src={CardImg}
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
