import React from 'react';
import { DevicesProps } from '../../lib/types';
import DeviceImage from './deviceImage';
import Rating from './rating';
import styles from '../../styles/components/Table.module.scss';

const DeviceTable = ({ devices }: DevicesProps) => {
  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>{null}</th>
            {devices.map(dev => <th key={dev.deviceID}><DeviceImage urls={dev.urls} /></th>)}
          </tr>
        </thead>
        <tbody>
          <tr key={'name'}>
            <td>Device</td>
            {devices.map(dev => <td key={dev.deviceID}>{dev.deviceName}</td>)}
          </tr>
          <tr key={'rating'}>
            <td>Rating</td>
            {devices.map(dev => <td key={dev.deviceID}><Rating rating={dev.rating} reviews={dev.reviewsCount} /></td>)}
          </tr>
          <tr key={'dimensions'}>
            <td>Dimensions</td>
            {devices.map(dev => <td key={dev.deviceID}>{dev.dimensions ? dev.dimensions.replace(/by/g, 'x') : '—'}</td>)}
          </tr>
          <tr key={'battery'}>
            <td>Battery</td>
            {devices.map(dev => <td key={dev.deviceID}>{dev.battery ? dev.battery : '—'}</td>)}
          </tr>
          <tr key={'wattage'}>
            <td>Wattage</td>
            {devices.map(dev => <td key={dev.deviceID}>{dev.wattage ? dev.wattage : '—'}</td>)}
          </tr>
          <tr key={'resistances'}>
            <td>Resistances</td>
            {devices.map(dev => <td key={dev.deviceID}>{dev.resistances.length > 0 ? dev.resistances.join(', ').replace(/ohm/g, 'Ω') : '—'}</td>)}
          </tr>
          <tr key={'capacity'}>
            <td>Capacity</td>
            {devices.map(dev => <td key={dev.deviceID}>{dev.capacity ? dev.capacity : '—'}</td>)}
          </tr>
          <tr key={'material'}>
            <td>Material</td>
            {devices.map(dev => <td key={dev.deviceID}>{dev.material ? dev.material : '—'}</td>)}
          </tr>
          <tr key={'drawActication'}>
            <td>Draw Activation</td>
            {devices.map(dev => <td key={dev.deviceID}>{dev.drawActivation ? 'Yes' : 'No'}</td>)}
          </tr>
          <tr key={'manualActivation'}>
            <td>Manual Activation</td>
            {devices.map(dev => <td key={dev.deviceID}>{dev.manualActivation ? 'Yes' : 'No'}</td>)}
          </tr>
          <tr key={'port'}>
            <td>Charging Port</td>
            {devices.map(dev => <td key={dev.deviceID}>{dev.port ? dev.port : '—'}</td>)}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeviceTable;
