import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,

	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: (newPost)=>{
			dispatch(addPostActionCreator(newPost));
		}
	}
}

const MyPostscontainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostscontainer; 