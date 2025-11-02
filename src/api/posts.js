import api from "./api";
import toast from "react-hot-toast";

const showLoadingToast = (msg = "Please wait...") => toast.loading(msg);
const hideLoadingToast = (id) => toast.dismiss(id);

export const createPost = async ({ description, postType, category, imageFile }) => {
    const toastId = showLoadingToast("Creating post...");
    try {
        const formData = new FormData();
        formData.append("description", description);
        formData.append("postType", postType);
        formData.append("category", category);
        if (imageFile) formData.append("image", imageFile);

        const { data } = await api.post("/posts", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        hideLoadingToast(toastId);
        toast.success("Post created successfully!");
        return data.data;
    } catch (err) {
        hideLoadingToast(toastId);
        toast.dismiss();
        toast.error(err.response?.data?.msg || "Failed to create post!");
    }
};

export const getAllPosts = async () => {
    try {
        const { data } = await api.get("/posts");
        return data.data;
    } catch (err) {
        console.error(err);
        toast.error("Failed to fetch posts!");
    }
};

export const getPostById = async (id) => {
    try {
        const { data } = await api.get(`/posts/${id}`);
        return data.data;
    } catch (err) {
        console.error(err);
        toast.error("Failed to fetch post!");
    }
};


export const incrementView = async (postId) => {
    try {
        const { data } = await api.post(`/posts/${postId}/view`);
        return data.data;
    } catch (err) {
        console.error(err);
        toast.error("Failed to increment view!");
    }
};

export const toggleLikePost = async (postId) => {
    try {
        const { data } = await api.post(`/posts/${postId}/like`);
        return data.data;
    } catch (err) {
        console.error(err);
        toast.error("Failed to toggle like!");
    }
};

export const addComment = async (postId, text) => {
    const toastId = showLoadingToast("Adding comment...");
    try {
        const { data } = await api.post(`/posts/${postId}/comment`, { text });
        hideLoadingToast(toastId);
        toast.success("Comment added!");
        return data.data; // returns updated comments array
    } catch (err) {
        hideLoadingToast(toastId);
        console.error(err);
        toast.error(err.response?.data?.msg || "Failed to add comment!");
    }
};
