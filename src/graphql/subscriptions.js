/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVodAsset = /* GraphQL */ `
  subscription OnCreateVodAsset {
    onCreateVodAsset {
      id
      title
      description
      video {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVodAsset = /* GraphQL */ `
  subscription OnUpdateVodAsset {
    onUpdateVodAsset {
      id
      title
      description
      video {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVodAsset = /* GraphQL */ `
  subscription OnDeleteVodAsset {
    onDeleteVodAsset {
      id
      title
      description
      video {
        id
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVideoObject = /* GraphQL */ `
  subscription OnCreateVideoObject {
    onCreateVideoObject {
      id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVideoObject = /* GraphQL */ `
  subscription OnUpdateVideoObject {
    onUpdateVideoObject {
      id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVideoObject = /* GraphQL */ `
  subscription OnDeleteVideoObject {
    onDeleteVideoObject {
      id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReplayVote = /* GraphQL */ `
  subscription OnCreateReplayVote(
    $replayID: String
    $votesNo: Int
    $votesYes: Int
  ) {
    onCreateReplayVote(
      replayID: $replayID
      votesNo: $votesNo
      votesYes: $votesYes
    ) {
      replayID
      votesNo
      votesYes
    }
  }
`;
export const onUpdateReplayVote = /* GraphQL */ `
  subscription OnUpdateReplayVote(
    $replayID: String
    $votesNo: Int
    $votesYes: Int
  ) {
    onUpdateReplayVote(
      replayID: $replayID
      votesNo: $votesNo
      votesYes: $votesYes
    ) {
      replayID
      votesNo
      votesYes
    }
  }
`;
export const onDeleteReplayVote = /* GraphQL */ `
  subscription OnDeleteReplayVote(
    $replayID: String
    $votesNo: Int
    $votesYes: Int
  ) {
    onDeleteReplayVote(
      replayID: $replayID
      votesNo: $votesNo
      votesYes: $votesYes
    ) {
      replayID
      votesNo
      votesYes
    }
  }
`;
