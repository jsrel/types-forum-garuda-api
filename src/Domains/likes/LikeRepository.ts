export default class LikeRepository {
  async addLike(commentId : string, owner : string) {
    throw new Error("LIKE_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async checkLike(commentId : string, owner : string) : Promise<void | object> {
    throw new Error("LIKE_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async checkStatus(payload : object) {
    throw new Error("LIKE_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }

  async getLikeByThreadId(threadId : string) : Promise<object> {
    throw new Error("LIKE_REPOSITORY.METHOD_NOT_IMPLEMENTED");
  }
}
