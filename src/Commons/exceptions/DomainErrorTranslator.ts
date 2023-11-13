/* eslint-disable @typescript-eslint/naming-convention */
import InvariantError from "./InvariantError";

interface Directory {
  [key : string] : InvariantError;
}

const DomainErrorTranslator = {
  translate(error : Error) : InvariantError {
    const directories : Directory = DomainErrorTranslator._directories;
    return directories[error.message] || error;
  },

  _directories: {
    "USER_REGISTER.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
      "tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada"
    ),
    "USER_REGISTER.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "tidak dapat membuat user baru karena tipe data tidak sesuai"
    ),
    "USER_REGISTER.USERNAME_LIMIT_CHAR": new InvariantError(
      "tidak dapat membuat user baru karena karakter username melebihi batas limit"
    ),
    "USER_REGISTER.USERNAME_CONTAIN_RESTRICTED_CHARACTER": new InvariantError(
      "tidak dapat membuat user baru karena username mengandung karakter terlarang"
    ),
    "USER_LOGIN.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
      "harus mengirimkan username dan password"
    ),
    "USER_LOGIN.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "username dan password harus string"
    ),
    "REFRESH_AUTHENTICATION_USE_CASE.NOT_CONTAIN_REFRESH_TOKEN": new InvariantError(
      "harus mengirimkan token refresh"
    ),
    "REFRESH_AUTHENTICATION_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "refresh token harus string"
    ),
    "DELETE_AUTHENTICATION_USE_CASE.NOT_CONTAIN_REFRESH_TOKEN": new InvariantError(
      "harus mengirimkan token refresh"
    ),
    "DELETE_AUTHENTICATION_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "refresh token harus string"
    ),
    "ADD_THREAD.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
      "tidak dapat membuat thread baru karena properti yang dibutuhkan tidak ada"
    ),
    "ADD_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "tidak dapat membuat thread baru karena tipe data tidak sesuai"
    ),
    "CHECK_THREAD.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
      "tidak dapat melihat detail thread karena properti yang dibutuhkan tidak ada"
    ),
    "CHECK_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "tidak dapat melihat detail thread karena tipe data tidak sesuai"
    ),
    "ADD_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
      "tidak dapat membuat komentar baru karena properti yang dibutuhkan tidak ada"
    ),
    "ADD_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "tidak dapat membuat komentar baru karena tipe data tidak sesuai"
    ),
    "DELETE_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
      "tidak dapat menghapus komentar karena properti yang dibutuhkan tidak ada"
    ),
    "DELETE_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "tidak dapat menghapus komentar karena tipe data tidak sesuai"
    ),
    "ADD_REPLY.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
      "tidak dapat membuat balasan baru karena properti yang dibutuhkan tidak ada"
    ),
    "ADD_REPLY.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "tidak dapat membuat balasan baru karena tipe data tidak sesuai"
    ),
    "DELETE_REPLY.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
      "tidak dapat menghapus balasan baru karena properti yang dibutuhkan tidak ada"
    ),
    "DELETE_REPLY.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "tidak dapat menghapus balasan baru karena tipe data tidak sesuai"
    ),
    "ADD_LIKE.NOT_CONTAIN_NEEDED_PROPERTY": new InvariantError(
      "tidak dapat melakukan tindakan karena properti yang dibutuhkan tidak ada"
    ),
    "ADD_LIKE.NOT_MEET_DATA_TYPE_SPECIFICATION": new InvariantError(
      "tidak dapat melakukan tindakan karena tipe data tidak sesuai"
    ),
  }
};

export default DomainErrorTranslator;
