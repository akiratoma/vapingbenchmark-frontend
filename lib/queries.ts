import { gql } from '@apollo/client';

export const SEARCH_DEVICES = gql`
  query ($ref: String!, $nextID: ID, $limit: Int) {
    devices (ref: $ref, nextID: $nextID, limit: $limit) {
      nextID
      data {
        deviceID
        deviceName
        previewUrl
      }
    }
  }
`;

export const GET_DEVICES = gql`
  query ($ids: [String]!) {
    devices (ids: $ids) {
      data {
        deviceID
        deviceName
        rating
        reviewsCount
        dimensions
        battery
        wattage
        resistances
        capacity
        material
        drawActivation
        manualActivation
        port
        urls
        previewUrl
      }
    }
  }
`;
