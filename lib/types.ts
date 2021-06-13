interface Device {
  deviceID: string
  deviceName: string
  rating: string
  reviewsCount: string
  dimensions: string
  battery: string
  wattage: string
  resistances: string[]
  capacity: string
  material: string
  drawActivation: boolean
  manualActivation: boolean
  port: string
  urls: string[]
  previewUrl: string
}

interface GraphQLResponse {
  nextID: string
  data: Device[]
}

export type Devices = Device[]

export interface DevicesResponse {
  devices: GraphQLResponse
}

export interface DevicesArgs {
  ids?: string[]
  ref?: string
  limit?: number
}

export interface DevicesProps {
  devices: Devices
}

export interface ImagesProps {
  urls: string[]
}

export interface MetatagsProps {
  title: string,
  description: string,
  image: string
}
