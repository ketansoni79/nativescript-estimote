import { Common } from './estimote.common';
export declare class ESTDeviceManagerDelegateImpl extends NSObject implements ESTDeviceManagerDelegate {
  static ObjCProtocols: {
      prototype: ESTDeviceManagerDelegate;
  }[];
  static new(): ESTDeviceManagerDelegateImpl;
  deviceManagerDidDiscoverDevices(manager: any, devices: any): void;
  deviceManagerDidFailDiscovery(manager: any): void;
  deviceManagerDidFailDiscoveryWithError(manager: any, error: any): void;
}
export declare class Estimote extends Common {
  message: string;
  manager: ESTDeviceManager;
  filter: ESTDeviceFilter;
  delegate: ESTDeviceManagerDelegateImpl;
  constructor();
  startScanning(): void;
  isScanning(): boolean;
  stopScanning(): void;
}
