import React, { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { DataContext } from "../context/DataContext.jsx";
import { Link } from "react-router-dom";

const Carousels = () => {
  const { data } = useContext(DataContext);
  // const data = [
  //   {
  //     _id: {
  //       $oid: "661ba99953744f9e6cd8df21",
  //     },
  //     title: "newDate140402",
  //     description: "newDate140402",
  //     content: "newDate140402",
  //     image:
  //       "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  //     author: {
  //       $oid: "661ba51dd10cd76e5d4922c8",
  //     },
  //     tags: ["Second", "First"],
  //     date: {
  //       $date: "2024-04-14T10:02:01.746Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "661cc350a1a5acfc7382981a",
  //     },
  //     title: "newBlog150400",
  //     description: "newBlog150400",
  //     content: "newBlog150400",
  //     image:
  //       "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  //     author: {
  //       $oid: "661ba51dd10cd76e5d4922c8",
  //     },
  //     tags: ["First", "Second"],
  //     date: {
  //       $date: "2024-04-15T06:04:00.522Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "6620b43928c0f7e1b21b0af5",
  //     },
  //     title: "newBlog150400",
  //     description: "newBlog150400",
  //     content: "newBlog150400",
  //     image:
  //       "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  //     author: {
  //       $oid: "661ba51dd10cd76e5d4922c8",
  //     },
  //     tags: ["First", "Second"],
  //     date: {
  //       $date: "2024-04-15T06:04:00.522Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "6620b70689f1e4d75b3b5a2d",
  //     },
  //     title: "newBlog150400",
  //     description: "newBlog150400",
  //     content: "newBlog150400",
  //     image:
  //       "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  //     author: {
  //       $oid: "661ba51dd10cd76e5d4922c8",
  //     },
  //     tags: ["First"],
  //     date: {
  //       $date: "2024-04-15T06:04:00.522Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "6620b71289f1e4d75b3b5a2e",
  //     },
  //     title: "newBlog150400",
  //     description: "newBlog150400",
  //     content: "newBlog150400",
  //     image:
  //       "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  //     author: {
  //       $oid: "661ba51dd10cd76e5d4922c8",
  //     },
  //     tags: ["Second"],
  //     date: {
  //       $date: "2024-04-15T06:04:00.522Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "6620b72789f1e4d75b3b5a2f",
  //     },
  //     title: "newBlog150400",
  //     description: "newBlog150400",
  //     content: "newBlog150400",
  //     image:
  //       "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  //     author: {
  //       $oid: "661ba51dd10cd76e5d4922c8",
  //     },
  //     tags: ["Third", "First"],
  //     date: {
  //       $date: "2024-04-15T06:04:00.522Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "6620b73589f1e4d75b3b5a30",
  //     },
  //     title: "newBlog150400",
  //     description: "newBlog150400",
  //     content: "newBlog150400",
  //     image:
  //       "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  //     author: {
  //       $oid: "661ba51dd10cd76e5d4922c8",
  //     },
  //     tags: ["Third"],
  //     date: {
  //       $date: "2024-04-15T06:04:00.522Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "66e87bd7b281045747890ba2",
  //     },
  //     title: "newBlog17092024",
  //     description: "newBlog17092024",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  //     image:
  //       "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
  //     author: "newBlogger0",
  //     tags: ["Third"],
  //     date: {
  //       $date: "2024-09-16T18:41:27.448Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "66e87dc8b281045747890ba6",
  //     },
  //     title: "newBlog17092024",
  //     description: "newBlog17092024",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
  //     image:
  //       "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
  //     author: "newBlogger0",
  //     tags: ["Third"],
  //     date: {
  //       $date: "2024-09-16T18:49:44.473Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "66e88a9d1c50d94c57e3d61e",
  //     },
  //     title: "newBlog17092024",
  //     description: "newBlog17092024",
  //     content:
  //       '<p class="ql-align-justify"><strong><s>Lorem Ipsum</s></strong><s>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</s></p><p class="ql-align-justify"><strong><em>Lorem Ipsum</em></strong><em>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</em></p><p class="ql-align-justify"><strong><u>Lorem Ipsum</u></strong><u>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</u></p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class="ql-align-justify"><strong>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</strong></p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><blockquote class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</blockquote><p class="ql-align-justify"><strong class="ql-size-huge">Lorem Ipsum</strong><span class="ql-size-huge">&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span></p><p><br></p>',
  //     image:
  //       "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-a-river-in-the-middle-of-the-forest-free-image.jpeg?w=600&quality=80",
  //     author: "newBlogger0",
  //     tags: [],
  //     date: {
  //       $date: "2024-09-16T19:44:29.871Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "66e88b891c50d94c57e3d622",
  //     },
  //     title: "newBlog17092024",
  //     description: "newBlog17092024",
  //     content:
  //       '<p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p>',
  //     image:
  //       "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-a-river-in-the-middle-of-the-forest-free-image.jpeg?w=600&quality=80",
  //     author: "newBlogger0",
  //     tags: ["Third"],
  //     date: {
  //       $date: "2024-09-16T19:48:25.798Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "66e89004759d0fc4b1950a20",
  //     },
  //     title: "newBlog17092024",
  //     description: "newBlog17092024\n",
  //     content:
  //       '<p class="ql-align-justify"><strong>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</strong></p><p class="ql-align-justify"><strong><em>Lorem Ipsum</em></strong><em>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</em><strong><em>Lorem Ipsum</em></strong><em>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</em></p><p class="ql-align-justify"><strong><u>Lorem Ipsum</u></strong><u>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</u></p><p class="ql-align-justify"><strong><s>Lorem Ipsum</s></strong><s>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</s></p><blockquote class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</blockquote><p class="ql-align-justify"><strong class="ql-size-huge">Lorem Ipsum</strong><span class="ql-size-huge">&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text</span></p>',
  //     image:
  //       "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-a-river-in-the-middle-of-the-forest-free-image.jpeg?w=600&quality=80",
  //     author: "newBlogger0",
  //     tags: ["First"],
  //     date: {
  //       $date: "2024-09-16T20:07:32.188Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "66e988593d271b229a345a7e",
  //     },
  //     title: "newBlog17092024",
  //     description: "newBlog17092024",
  //     content:
  //       '<p class="ql-align-justify"><strong>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</strong></p><p class="ql-align-justify"><strong><em>Lorem Ipsum</em></strong><em>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</em></p><p class="ql-align-justify"><strong><s>Lorem Ipsum</s></strong><s>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</s></p><p class="ql-align-justify"><strong><u>Lorem Ipsum</u></strong><u>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</u></p><blockquote class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</blockquote><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p>',
  //     image: "https://pixlr.com/images/index/ai-image-generator-one.webp",
  //     author: "newBlogger0",
  //     tags: ["Second"],
  //     date: {
  //       $date: "2024-09-17T13:47:05.530Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "66e98dff98e15a41a293f8c9",
  //     },
  //     title: "newBlog17092024",
  //     description: "newBlog17092024",
  //     content:
  //       "<p><strong>Lor<em>em Ipsum</em></strong><em>&nbsp;is si</em>mply <strong>dummy</strong> text of <s>the</s> printing and typesetting i<strong>ndustry. Lorem Ipsum has been the</strong> industry's s<s>tandard dummy text ever since the 1500s, when an unkn</s>own printer <u>took</u> a galley of</p>",
  //     image: "https://pixlr.com/images/index/ai-image-generator-one.webp",
  //     author: "newBlogger0",
  //     tags: ["First"],
  //     date: {
  //       $date: "2024-09-17T14:11:11.046Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "66e99066078e585976be9666",
  //     },
  //     title: "newFormatBlog17092024",
  //     description: "newFormatBlog17092024",
  //     content:
  //       '<p class="ql-align-justify"><strong>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</strong></p><p class="ql-align-justify"><strong><em>Lorem Ipsum</em></strong><em>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</em></p><p class="ql-align-justify"><strong><s>Lorem Ipsum</s></strong><s>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</s></p><p class="ql-align-justify"><strong><u>Lorem Ipsum</u></strong><u>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</u></p><blockquote class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</blockquote><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p>',
  //     image: "https://pixlr.com/images/index/ai-image-generator-one.webp",
  //     author: "newBlogger0",
  //     tags: ["First"],
  //     date: {
  //       $date: "2024-09-17T14:21:26.801Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "66e9d479c0f6e57757a2f1fc",
  //     },
  //     title: "newFormatBlog170920242",
  //     description: "newFormatBlog170920242",
  //     content:
  //       '<p><span class="ql-size-large">hey my name is bhushan</span></p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown </p><p class="ql-align-justify"><span class="ql-size-large">printer took a galley</span></p><p class="ql-align-justify">Of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><span class="ql-size-large">hey my name is bhushan</span></p><p class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown </p><p class="ql-align-justify"><span class="ql-size-large">printer took a galley</span></p><p class="ql-align-justify">Of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
  //     image: "https://pixlr.com/images/index/ai-image-generator-one.webp",
  //     author: "newBlogger0",
  //     tags: ["First"],
  //     date: {
  //       $date: "2024-09-17T19:11:53.847Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "66e9d5e9c0f6e57757a2f206",
  //     },
  //     title: "newFormatBlog170920243",
  //     description: "newFormatBlog170920243",
  //     content:
  //       '<h1 class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;</h1><p class="ql-align-justify">is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and </p><h1 class="ql-align-justify">scrambled it to make</h1><p class="ql-align-justify"> a type specimen book. It has survived not only five centuries, but also the leap<br/> into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with </p><h1 class="ql-align-justify">the release of </h1><p class="ql-align-justify">Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br/></p>',
  //     image: "https://pixlr.com/images/index/ai-image-generator-one.webp",
  //     author: "newBlogger0",
  //     tags: ["First"],
  //     date: {
  //       $date: "2024-09-17T19:18:01.339Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "66e9d955c0f6e57757a2f20a",
  //     },
  //     title: "newFormatBlog170920244",
  //     description: "newFormatBlog170920244",
  //     content:
  //       "<p class=\"ql-align-justify\"><strong>is simply dummy</strong></p><p class=\"ql-align-justify\">text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into </p><p><br></p><h1>electronic typesetting,</h1><p><br></p><p><em><u>remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum is simply dummy text of the printing and typesetting</u> </em>industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p><p><s>to make a type specimen book</s></p><p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with </p><p><br></p><h1>the release of Letraset sheets</h1><p><br></p><blockquote>containing Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum </blockquote>",
  //     image: "https://pixlr.com/images/index/ai-image-generator-one.webp",
  //     author: "newBlogger0",
  //     tags: ["Second"],
  //     date: {
  //       $date: "2024-09-17T19:32:37.007Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "66eacd6c9a871be460fbeca2",
  //     },
  //     title: "newFormatBlog180920241",
  //     description: "newFormatBlog180920241",
  //     content:
  //       '<p class="ql-align-justify"><strong>Lorem Ipsum&nbsp;is simply dummy text of the printing and typesetting industryng, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</strong></p><p class="ql-align-justify"><strong><em>Lorem Ipsum</em></strong><em>&nbsp;is simply dummy text of the printing and typesetting industry. Lsed in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</em></p><p><strong><s>Lorem Ipsum</s></strong><s>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only</s></p>',
  //     image: "https://pixlr.com/images/index/ai-image-generator-one.webp",
  //     author: "newBlogger0",
  //     tags: ["Fourth"],
  //     date: {
  //       $date: "2024-09-18T12:54:04.624Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "66ec78cfaa0a88f0a4f8784a",
  //     },
  //     title: "Setup Gitlab CI",
  //     description:
  //       "Gitlab is a comprehensive platform designed for software development and version control using git.",
  //     content:
  //       '<h2>Introduction</h2><p><strong>Gitlab</strong>&nbsp;is a comprehensive platform designed for software development and version control using git. It provides a user-friendly web interface that enhances the speed of working with git, making it easier to manage Git repositories.&nbsp;<strong>Gitlab</strong>&nbsp;offers a range of features including:</p><ul><li>Free public and private repositories: You can host your code securely and privately or share it with the world.</li><li><strong>Continuous Integration/Continuous Deployment (CI/CD)</strong>: Automate the testing and deployment of your code.</li><li>Free private docker image storage on&nbsp;<strong>Container Registry</strong></li></ul><p>In this article, I\'ll guide you on how to push a&nbsp;<strong>Docker</strong>&nbsp;image to the&nbsp;<strong>Gitlab Container Registry</strong>&nbsp;and set up&nbsp;<strong>CI</strong>&nbsp;to automatically build and push&nbsp;<strong>Docker</strong>&nbsp;images when you push code to a&nbsp;<strong>Gitlab</strong>&nbsp;repository.</p><p><br></p><h2>Pushing a Docker Image to the Gitlab Container Registry</h2><p>First, you\'ll need a&nbsp;<strong>Gitlab</strong>&nbsp;account and a repository (either public or private will work).</p><p><span style="color: var(--link-branded-color);">Use the&nbsp;</span><strong style="color: var(--link-branded-color);">NodeJS Typescript Server</strong><span style="color: var(--link-branded-color);">&nbsp;project I introduced earlier</span>, or any project you have that includes a&nbsp;<strong>Dockerfile</strong>&nbsp;for building a&nbsp;<strong>Docker</strong>&nbsp;image.</p><p>Next, create a&nbsp;<strong>Personal Access Token</strong>&nbsp;to prepare for pushing the image to the&nbsp;<strong>Container Registry</strong>.</p><p>After building your Docker image, tag the image appropriately to ensure it can be pushed to the&nbsp;<strong>Container Registry</strong>.</p><p><br></p><h2>Setting up Gitlab CI</h2><p>To set up steps that run whenever you push code to your&nbsp;<strong>Gitlab</strong>&nbsp;repository, add a&nbsp;<strong><em>.gitlab-ci.yml</em></strong>&nbsp;file to your project with the following content:</p><p><br></p><p><span class="ql-size-large">Explanation:</span></p><p>-&nbsp;<strong>image</strong>&nbsp;and&nbsp;<strong>services</strong>: Define the Docker environment to execute Docker commands.</p><p>-&nbsp;<strong>stages</strong>: Specify the stages that will execute when code is pushed. Here, there\'s only one stage: build.</p><p>-&nbsp;<strong>before_script</strong>: Runs before each stage. This step logs into the&nbsp;<strong>Container Registry</strong>.</p><p>-&nbsp;<strong>stage build</strong>: Builds the image with two tags: the&nbsp;<strong>SHA commit ID</strong>&nbsp;and "<strong>latest</strong>", then pushes all tags to the&nbsp;<strong>Container Registry</strong>.</p><p><strong>Gitlab</strong>&nbsp;provides environment variables, which are information that can be used when stages are executed:</p><ul><li><strong>CI_REGISTRY_USER</strong>: username</li><li><strong>CI_REGISTRY_PASSWORD</strong>: password</li><li><strong>CI_REGISTRY</strong>:&nbsp;<strong>Gitlab</strong>&nbsp;register</li><li><strong>CI_REGISTRY_IMAGE</strong>: image name</li><li><strong>CI_COMMIT_SHA</strong>: SHA commit id</li></ul><p><br></p>',
  //     image:
  //       "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
  //     author: "newBlogger0",
  //     tags: ["WebDev", "Software Development"],
  //     date: {
  //       $date: "2024-09-19T19:17:35.125Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "66ec7cdeaa0a88f0a4f87854",
  //     },
  //     title: "Service Workers - One Byte Explainer",
  //     description:
  //       "This is a submission for the Web Game Challenge: One Byte Explainer",
  //     content:
  //       '<h2>Explainer</h2><p>Service workers cache key data offline, like save points in a game 🎮. Even if your players rage-quit 😡 by closing the tab, they can pick up right where they left off. It\'s a safety net against crashes and connection issues!</p><p><br></p><h2>Pushing a Docker Image to the Gitlab Container Registry</h2><p>First, you\'ll need a&nbsp;<strong>Gitlab</strong>&nbsp;account and a repository (either public or private will work).</p><p><span style="color: var(--link-branded-color);">Use the&nbsp;</span><strong style="color: var(--link-branded-color);">NodeJS Typescript Server</strong><span style="color: var(--link-branded-color);">&nbsp;project I introduced earlier</span>, or any project you have that includes a&nbsp;<strong>Dockerfile</strong>&nbsp;for building a&nbsp;<strong>Docker</strong>&nbsp;image.</p><p>Next, create a&nbsp;<strong>Personal Access Token</strong>&nbsp;to prepare for pushing the image to the&nbsp;<strong>Container Registry</strong>.</p><p>After building your Docker image, tag the image appropriately to ensure it can be pushed to the&nbsp;<strong>Container Registry</strong>.</p><p><br></p><h2>Setting up Gitlab CI</h2><p>To set up steps that run whenever you push code to your&nbsp;<strong>Gitlab</strong>&nbsp;repository, add a&nbsp;<strong><em>.gitlab-ci.yml</em></strong>&nbsp;file to your project with the following content:</p><p><br></p><h2>How does it work?</h2><p>The IndexNow protocol is based on the&nbsp;<span style="color: var(--link-branded-color);">Ping</span>&nbsp;protocol, which notifies search engines when a new article is published. IndexNow goes one step further, notifying search engines when a web page is updated.</p><p>To use IndexNow, simply send an HTTP POST request to the URL&nbsp;https://www.bing.com/indexnow&nbsp;(or any other search engine with an&nbsp;/indexnow&nbsp;API)</p><p><br></p><h2>Why use IndexNow?</h2><p>IndexNow enables rapid indexing of web pages on search engines, which can be useful for websites that frequently publish content. This helps to improve the visibility of web pages on search engines and attract more traffic.</p><p><br></p><h2>Implement IndexNow on my website</h2><p>To implement IndexNow on your website, you can use a plugin like&nbsp;<span style="color: var(--link-branded-color);">IndexNow WordPress Plugin</span>, or send HTTP requests manually.</p><p>There are also hosting providers that support IndexNow, such as&nbsp;<span style="color: var(--link-branded-color);">Cloudflare</span>,&nbsp;<span style="color: var(--link-branded-color);">WordPress.com</span>,&nbsp;<span style="color: var(--link-branded-color);">Shopify</span>, etc. You can&nbsp;<span style="color: var(--link-branded-color);">find the list directly on the site</span>.</p>',
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHAe0g1f5ng-92MI1s6prc0NW9ZnRPDlHuQ&s",
  //     author: "newBlogger0",
  //     tags: ["WebDev", "DevOps", "MERN"],
  //     date: {
  //       $date: "2024-09-19T19:34:54.055Z",
  //     },
  //     __v: 0,
  //   },
  //   {
  //     _id: {
  //       $oid: "66ec7ea9aa0a88f0a4f8785e",
  //     },
  //     title: "How I Sync my Obsidian Notes For Free !",
  //     description:
  //       "Obsidian is a great tool, but I missed the sync feature that Notion and Anytype offer.",
  //     content:
  //       '<p>I use Notion as my daily note-taking app. However, since all data in Notion is stored entirely in the cloud, I’ve noticed that the app can be slow to load and update notes. I’ve also observed a lag in syncing updates between my laptop and phone.</p><p><br></p><p>As a result, I began searching for alternatives and found two options: Anytype and Obsidian. Anytype has a limit of 1GB of cloud storage. Additionally, I wanted an option that allows me to keep my notes in Markdown format, so I decided to use Obsidian.</p><p><br></p><p>Obsidian is a great tool, but I missed the sync feature that Notion and Anytype offer. When I checked Obsidian’s website, I found that it charges $4 per month for sync, which adds up to around 4,000 Rupees per year—too expensive for a sync feature, in my opinion.</p><p><br></p><p>Suddenly, the developer within me awoke, and I decided to build a setup for myself (time is less costly than money for me 🤪). But then I wondered if another developer might have already thought of this.</p><p><br></p><p>And yes, I was right!</p><p>I found a solution called Syncthing. Syncthing is a&nbsp;<strong>continuous file synchronization</strong>&nbsp;program. It’s encrypted, open-source, and uses an open protocol. It works with macOS, Windows, Linux, and Android.</p><p>Here’s a step-by-step guide to setting up folder sync between your Mac and Android phone using Syncthing:</p><p><br></p><h3><strong>Step 1: Install Syncthing on Your Mac</strong></h3><ol><li><strong>Download Syncthing:</strong></li></ol><ul><li class="ql-indent-1">Visit the&nbsp;<span style="color: var(--link-branded-color);">Syncthing official website</span>.</li><li class="ql-indent-1">Download the macOS version of Syncthing.</li></ul><ol><li><strong>Install Syncthing:</strong></li></ol><ul><li class="ql-indent-1">Open the downloaded&nbsp;.dmg&nbsp;file.</li><li class="ql-indent-1">Drag Syncthing to the Applications folder.</li></ul><ol><li><strong>Run Syncthing:</strong></li></ol><ul><li class="ql-indent-1">Open Syncthing from the Applications folder.</li><li class="ql-indent-1">The first time you run it, your web browser will open to the Syncthing web interface.</li></ul><ol><li><strong>Allow Syncthing through Firewall:</strong></li></ol><ul><li class="ql-indent-1">If prompted, allow Syncthing to accept incoming network connections in the firewall settings.</li></ul><p><br></p><h3><strong>Step 2: Install Syncthing on Your Android Phone</strong></h3><ol><li><strong>Download Syncthing:</strong></li></ol><ul><li class="ql-indent-1">Open the Google Play Store on your Android phone.</li><li class="ql-indent-1">Search for “Syncthing” and install it.</li></ul><ol><li><strong>Run Syncthing:</strong></li></ol><ul><li class="ql-indent-1">Open the Syncthing app on your Android phone.</li><li class="ql-indent-1">Allow the necessary permissions for storage and network access.</li></ul><p><br></p><h3><strong>Step 3: Connect Your Mac and Android Phone</strong></h3><ol><li><strong>Find Your Device ID on Mac:</strong></li></ol><ul><li class="ql-indent-1">In the Syncthing web interface on your Mac, go to the “Actions” menu (three dots in the top right) and select “Show ID.”</li><li class="ql-indent-1">Copy the Device ID.</li></ul><ol><li><strong>Add Your Mac’s Device ID to Android:</strong></li></ol><ul><li class="ql-indent-1">On your Android phone, open Syncthing.</li><li class="ql-indent-1">Tap the “Add Device” button (usually a “+” icon).</li><li class="ql-indent-1">Paste your Mac’s Device ID and give it a name (e.g., “My Mac”).</li><li class="ql-indent-1">Save the settings.</li></ul><ol><li><strong>Add Your Android’s Device ID to Mac:</strong></li></ol><ul><li class="ql-indent-1">On your Android device, tap “Show Device ID” in Syncthing and copy it.</li><li class="ql-indent-1">In the Syncthing web interface on your Mac, a dialog should appear asking if you want to add a new device (your Android device).</li><li class="ql-indent-1">Paste the Android device ID if necessary and give it a name (e.g., “My Phone”).</li><li class="ql-indent-1">Click “Save.”</li></ul><p><br></p>',
  //     image:
  //       "https://static.vecteezy.com/system/resources/previews/005/283/061/non_2x/web-development-concept-in-3d-isometric-design-designer-works-with-code-interface-engineering-programming-settings-and-optimizes-pages-template-with-people-scene-illustration-for-webpage-vector.jpg",
  //     author: "newBlogger0",
  //     tags: ["WebDev", "DevOps", "Cloud"],
  //     date: {
  //       $date: "2024-09-19T19:42:33.574Z",
  //     },
  //     __v: 0,
  //   },
  // ];
  const getRandomBlogs = (num) => {
    if (!data || data.length === 0) return [];
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };
  const slides = getRandomBlogs(4);

  return (
    <>
      <div className="flex w-[95%] mx-auto my-4 space-x-4">
        <div className="h-96 overflow-hidden border-2 border-black md:w-2/3 w-full relative group flex items-center justify-center">
          <Carousel className="flex items-center justify-center overflow-hidden w-full rounded-3xl">
            {slides.map((blog, index) => (
              <Carousel.Item
                className="w-full h-[80vh] rounded-3xl bg-center bg-cover duration-500"
                style={{ backgroundImage: `url(${blog.image})` }}
                key={index}
              >
                <Link to={`/blogpost/${blog.title}`}>
                  <Carousel.Caption className="space-y-3 absolute top-1/3 z-40">
                    <h3 className="font-bold sm:text-5xl text-3xl">
                      {blog.title}
                    </h3>
                    <p className="text-lg sm:line-clamp-3 line-clamp-2">
                      {blog.description}
                    </p>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="border-2 border-black w-1/3 md:flex hidden items-end justify-center flex-col space-y-3 italic px-2">
          <h1 className="border-2 border-black text-5xl font-bold">
            ...InsightInk
          </h1>
          <p className="font-medium">
            Transforming Thoughts into Meaningful Narratives.
          </p>
        </div>
      </div>
    </>
  );
};

export default Carousels;
