import React, { Component } from "react";
import "./posts_page.scss"
import { getPosts } from "../../redux/posts/posts_action"
import { deletePost } from "../../redux/posts/posts_action"
import { deleteComment } from "../../redux/comments/comments_action"
import { getComments } from "../../redux/comments/comments_action"
import { setLoading } from "../../redux/posts/posts_action"
import { connect } from "react-redux";
import PostComponent from "../../components/post_component/post_component"
import CommentComponent from "../../components/comment_component/comment_component"
import SearchBar from "../../components/search_component/search_component"
import { sortBy } from "underscore";
import { NULL } from "mysql/lib/protocol/constants/types";

class Post extends Component {


    constructor(props) {
        super(props)
        this.state = {
            page: 1,
            loading: false,
            posts: [],
            comments: [],
            search: '',
        }
    }


    UNSAFE_componentWillMount() {
        const { getPosts } = this.props;
        const { getComments } = this.props;

        getPosts()
        getComments()

    }

    update_search = (value) => {

        this.setState({ search: value })

    }

    scroll_to_end() {


        this.setState({ loading: true })

        this.setState({ page: this.state.page + 1 })

        this.setState({ loading: false })

    }

    delete_post = (id) => {

        const { deletePost } = this.props

        deletePost(id)
    }

    delete_comment = (id) => {

        const { deleteComment } = this.props

        deleteComment(id)
    }

    on_scroll() {

        document.addEventListener('scroll', (e) => {

            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {

                this.scroll_to_end()
            }

        })
    }

    sort = () => {

        const { posts } = this.props.posts

    }

    render() {

        this.on_scroll()

        const { posts, comments, post_loading, comment_loading } = this.props
        const { search } = this.state
        return (
            post_loading === false && comment_loading === false ?
                <div>
                    <SearchBar sort={this.sort} search={this.update_search} />

                    <div className="post">
                        {

                            posts?.map((element, index) => index < this.state.page * 3 && search === '' ?

                                <PostComponent key={element.id} id={element} delete={this.delete_post} title={element.title} body={element.body}>
                                    <CommentComponent key={element.id} delete={this.delete_comment} data={comments.filter(e => e.postId === element.id)} />
                                </PostComponent>

                                : element.userId == search ?

                                    <PostComponent key={element.id} id={element} delete={this.delete_post} title={element.title} body={element.body}>
                                        <CommentComponent key={element.id} delete={this.delete_comment} data={comments.filter(e => e.postId === element.id)} />
                                    </PostComponent>

                                    : null)

                        }
                        {this.state.loading ? <div className="loader_1"></div> : null}
                    </div>
                </div>
                : <div className="loader"></div>

        )
    }

}

const mapStateToProps = ({ postsReducer, commentsReducer }) => ({
    post_loading: postsReducer.loading,
    comment_loading: commentsReducer.loading,
    posts: postsReducer.posts,
    comments: commentsReducer.comments
});

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => {
            dispatch(getPosts());
        },
        getComments: () => {
            dispatch(getComments());
        },
        setLoading: (value) => {
            dispatch(setLoading(value));
        },
        deletePost: (value) => {
            dispatch(deletePost(value));
        },
        deleteComment: (value) => {
            dispatch(deleteComment(value));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);

