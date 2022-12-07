import { ActionTree, MutationTree } from "vuex";
import privateConfig from "../../../config/privateRuntime";

const { API_URL } = privateConfig;

export type Post = {
  id?: string;
  author?: string;
  jetpack_featured_media_url?: string;
  excerpt?: { rendered?: string } ;
  title?: { rendered?: string };
  content?: { rendered?: string };
  date?: string | Date;
  categories?: string[];
};

export type State = {
  posts: Post[];
  post: Post | null;
};

export enum MutationTypes {
  SET_POSTS = "setPosts",
  SET_POST = "setPost",
  SET_RELATED_POSTS = "setRelatedPosts"
}

export enum ActionTypes {
  FETCH_POSTS = "fetchPosts",
  FETCH_POST = "fetchPost",
  FETCH_RELATED_POSTS = "fetchRelatedPosts"
}

export const state = (): State => ({
  posts: [],
  post: null,
});

export type PostsState = ReturnType<typeof state>;

export const mutations: MutationTree<PostsState> = {
  [MutationTypes.SET_POSTS]: (state, payload) => {
    state.posts = payload;
  },
  [MutationTypes.SET_POST]: (state, payload) => {
    state.post = payload;
  }
};

export const actions: ActionTree<PostsState, PostsState> = {
  async [ActionTypes.FETCH_POSTS]({ commit }): Promise<void> {
    const url = `${API_URL}/posts`;
    const response = await this.$axios.get(url);
    commit(MutationTypes.SET_POSTS, response?.data || []);
  },

  async [ActionTypes.FETCH_POST]({ commit }, { id }): Promise<void> {
    const url = `${API_URL}/posts/${id}`;
    const response = await this.$axios.get(url);
    commit(MutationTypes.SET_POST, response?.data || {});
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
