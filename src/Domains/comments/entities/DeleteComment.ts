export interface DeleteCommentPayload {
  threadId : string;
  commentId : string;
  owner : string;
}

export default class DeleteComment {
  threadId : string;
  commentId : string;
  owner : string;

  constructor(payload : DeleteCommentPayload) {
    this._verifyPayload(payload);

    this.threadId = payload.threadId;
    this.commentId = payload.commentId;
    this.owner = payload.owner;
  }

  private _verifyPayload(payload : DeleteCommentPayload) {
    const { threadId, commentId, owner } = payload;

    if (!threadId || !commentId || !owner) {
      throw new Error("DELETE_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (
      typeof threadId !== "string" ||
      typeof commentId !== "string" ||
      typeof owner !== "string"
    ) {
      throw new Error("DELETE_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}
