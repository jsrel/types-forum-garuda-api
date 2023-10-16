import AuthRepository from "../../../Domains/auths/AuthRepository";
import DeleteAuthUseCase from "../DeleteAuthUseCase";

describe("DeleteAuthUseCase", () => {
  it("should throw error if use case payload not contain refresh token", async () => {
    // Arrange
    const useCasePayload = {};
    const deleteAuthUseCase = new DeleteAuthUseCase({} as any);

    // Action & Assert
    await expect(deleteAuthUseCase.execute(useCasePayload as any))
      .rejects
      .toThrowError("DELETE_AUTHENTICATION_USE_CASE.NOT_CONTAIN_REFRESH_TOKEN");
  });

  it("should throw error if refresh token not string", async () => {
    // Arrange
    const useCasePayload = {
      refreshToken: 123,
    };
    const deleteAuthUseCase = new DeleteAuthUseCase({} as any);

    // Action & Assert
    await expect(deleteAuthUseCase.execute(useCasePayload as any))
      .rejects
      .toThrowError("DELETE_AUTHENTICATION_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION");
  });

  it("should orchestrating the delete authentication action correctly", async () => {
    // Arrange
    const useCasePayload = {
      refreshToken: "refreshToken",
    };
    const mockAuthRepository = new AuthRepository();
    mockAuthRepository.checkAvailabilityToken = jest.fn()
      .mockImplementation(() => Promise.resolve());
    mockAuthRepository.deleteToken = jest.fn()
      .mockImplementation(() => Promise.resolve());

    const deleteAuthUseCase = new DeleteAuthUseCase({
      authRepository: mockAuthRepository,
    });

    // Act
    await deleteAuthUseCase.execute(useCasePayload);

    // Assert
    expect(mockAuthRepository.checkAvailabilityToken)
      .toHaveBeenCalledWith(useCasePayload.refreshToken);
    expect(mockAuthRepository.deleteToken)
      .toHaveBeenCalledWith(useCasePayload.refreshToken);
  });
});
