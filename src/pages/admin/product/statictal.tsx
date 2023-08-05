import React from 'react';
import { Progress } from 'antd';

const Static = () => (
  <>
    <p className='font-mono font-bold'>day</p>
    <Progress percent={62} />
    <p className='font-mono font-bold'>week</p>
    <Progress percent={37} status="active" />
    <p className='font-mono font-bold'>month</p>
    <Progress percent={84} status="active" />
    <p className='font-mono font-bold'>year</p>
    <Progress percent={47} status="active" />
    <p className='font-mono font-bold'>error</p>
    <Progress percent={10} status="exception" />
    
  </>
);

export default Static;