import React, { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { RiShareForwardLine } from "react-icons/ri";
import { BsSendFill } from "react-icons/bs";
import GroupsImg from '../../assets/media3.png'
import NewPostModal from "../../components/Dashboard/Community/NewPost";
import { Link } from "react-router-dom";
import { getAllPosts, toggleLikePost, addComment, incrementView } from "../../api/posts";
import { timeAgo } from "../../utils/util";

const Community = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [isOpen, setIsOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [commentText, setCommentText] = useState({});
    const [viewedPosts, setViewedPosts] = useState(new Set());

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        const allPosts = await getAllPosts();
        if (allPosts) setPosts(allPosts);
    };

    const handleLike = async (postId) => {
        await toggleLikePost(postId);
        fetchPosts()
    };

    const handleComment = async (postId, text) => {
        if (!text.trim()) return;
        await addComment(postId, text);
        fetchPosts()
    };

    const handleView = async (postId) => {
        if (viewedPosts.has(postId)) return;
        const updatedViews = await incrementView(postId);
        setPosts(posts.map(p => p._id === postId ? { ...p, views: updatedViews } : p));
        setViewedPosts(prev => new Set(prev).add(postId));
    };

    const handlePostCreated = (newPost) => setPosts([newPost, ...posts]);

    const filteredPosts = posts.filter((post) => {
        if (activeTab === "all") return true;
        return post.postType === activeTab;
    });

    const groups = [
        {
            id: 1,
            title: "Faith Builders",
            members: "12k Members",
            image: GroupsImg,
        },
        {
            id: 2,
            title: "Prayer Warriors",
            members: "12k Members",
            image: GroupsImg,
        },
    ];

    const suggested = [
        {
            id: 1,
            title: "Faith Builders",
            members: "12k Members",
            image: GroupsImg,
        },
    ];

    return (
        <div className="w-full md:px-4">
            {/* Top Tabs and Button */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
                <div className="flex gap-2">
                    <button
                        onClick={() => setActiveTab("all")}
                        className={`md:px-4 px-3 py-2 font-poppins rounded-md font-medium md:text-sm text-[12px] ${activeTab === "all"
                            ? "bg-sky-400 text-white"
                            : "bg-white border text-gray-600"
                            }`}
                    >
                        All Posts
                    </button>
                    <button
                        onClick={() => setActiveTab("prayer")}
                        className={`md:px-4 px-3 py-2 rounded-md font-poppins font-medium md:text-sm text-[12px] ${activeTab === "prayer"
                            ? "bg-sky-400 text-white"
                            : "bg-white border text-gray-600"
                            }`}
                    >
                        Prayer Wall
                    </button>
                    <button
                        onClick={() => setActiveTab("group")}
                        className={`md:px-4 px-3 py-2 rounded-md font-medium font-poppins md:text-sm text-[12px] ${activeTab === "group"
                            ? "bg-sky-400 text-white"
                            : "bg-white border text-gray-600"
                            }`}
                    >
                        Group posts
                    </button>
                </div>
                <button onClick={() => setIsOpen(true)} className="bg-black text-white md:px-6 px-4 font-poppins py-2 rounded-md md:text-sm text-[12px]">
                    Make a post
                </button>

                {/* Make Post Modal */}
                {isOpen && <NewPostModal onPostCreated={handlePostCreated} onClose={() => { setIsOpen(false); fetchPosts() }} />}
            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Left Side - Posts */}
                <div className="lg:col-span-2 border bg-white p-5 rounded-md space-y-4">
                    {filteredPosts.map((post) => (
                        <div
                            key={post._id}
                            className="bg-white rounded-lg shadow border p-4 space-y-3"
                        >
                            {/* Post Header */}
                            <div className="flex justify-between">
                                <div className="flex items-center gap-1">
                                    {post?.image ? (
                                        <img
                                            src={post?.image}
                                            alt={post?.user?.name}
                                            className="w-14 h-14 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="md:w-14 md:h-14 h-10 w-10 rounded-full bg-gray-300"></div>
                                    )}
                                    <div>
                                        <p className="font-semibold font-poppins">{post.user?.name}</p>
                                        <p className="text-gray-500 text-sm font-poppins">{timeAgo(post?.createdAt)}</p>
                                    </div>
                                </div>
                                <HiDotsVertical className="text-black" />
                            </div>

                            {/* Post Text */}
                            <div className="bg-gray-100 px-5 py-4 md:pr-32 rounded-md">
                                <p className="text-sm text-gray-800 font-poppins">{post?.description}</p>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
                                <div onClick={() => handleView(post._id)} className="flex items-center font-poppins cursor-pointer border rounded-md px-3 py-2 gap-1">
                                    <MdOutlineRemoveRedEye /> {post.views}
                                </div>
                                <div onClick={() => handleLike(post._id)} className="flex items-center border font-poppins rounded-md cursor-pointer px-3 py-2 gap-1">
                                    <FaRegThumbsUp /> {post?.likes?.length}
                                </div>
                                <div className="flex items-center border rounded-md font-poppins cursor-pointer px-3 py-2 gap-1">
                                    <TbMessage /> {post.comments?.length}
                                </div>
                                <div className="flex items-center border rounded-md font-poppins cursor-pointer px-3 py-2 gap-1">
                                    <RiShareForwardLine /> {0}
                                </div>
                            </div>

                            {/* Comment Box */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Add comments"
                                    className="flex-1 border bg-gray-100 rounded px-3 py-3 text-sm focus:outline-none"
                                    value={commentText[post._id] || ""}
                                    onChange={(e) =>
                                        setCommentText((prev) => ({ ...prev, [post._id]: e.target.value }))
                                    }
                                    onKeyDown={async (e) => {
                                        if (e.key === "Enter") {
                                            await handleComment(post._id, commentText[post._id]);
                                            setCommentText((prev) => ({ ...prev, [post._id]: "" }));
                                        }
                                    }}
                                />
                                <button className="bg-sky-400 text-white py-[15px] px-4 rounded" onClick={async () => {
                                    await handleComment(post._id, commentText[post._id]);
                                    setCommentText((prev) => ({ ...prev, [post._id]: "" }));
                                }}>
                                    <BsSendFill />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side - Groups */}
                <div className="space-y-4">
                    {/* Your Groups */}
                    <div className="bg-white rounded-lg shadow border p-4">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-semibold font-poppins">Your groups</h3>
                            <button className="text-xs text-black font-poppins underline">See More</button>
                        </div>
                        <div className="space-y-4">
                            {groups.map((group) => (
                                <div
                                    key={group.id}
                                    className="bg-gray-50 rounded-md overflow-hidden shadow-sm"
                                >
                                    {/* Image full width top */}
                                    <img
                                        src={group.image}
                                        alt={group.title}
                                        className="w-full h-32 object-cover"
                                    />

                                    {/* Content below */}
                                    <div className="flex justify-between items-center p-3">
                                        <div>
                                            <p className="font-medium text-sm font-poppins">{group.title}</p>
                                            <p className="text-xs text-gray-500 font-poppins">{group.members}</p>
                                        </div>
                                        <button className="bg-sky-400 text-white text-sm px-6 py-2 rounded">
                                            Join
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Suggested Groups */}
                    <div className="bg-white rounded-lg shadow border p-4">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="font-semibold font-poppins">Suggested groups</h3>
                            <Link to='/suggestgroup'>
                                <button className="text-xs font-poppins text-black underline">See More</button>
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {suggested.map((group) => (
                                <div
                                    key={group.id}
                                    className="bg-gray-50 rounded-md overflow-hidden shadow-sm"
                                >
                                    {/* Image full width top */}
                                    <img
                                        src={group.image}
                                        alt={group.title}
                                        className="w-full h-32 object-cover"
                                    />

                                    {/* Content below */}
                                    <div className="flex justify-between items-center p-3">
                                        <div>
                                            <p className="font-medium text-sm font-poppins">{group.title}</p>
                                            <p className="text-xs text-gray-500 font-poppins">{group.members}</p>
                                        </div>
                                        <button className="bg-sky-400 text-white text-sm px-6 py-2 rounded">
                                            Join
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Community;
