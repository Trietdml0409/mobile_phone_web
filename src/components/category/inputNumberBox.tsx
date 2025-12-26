'use client';

import React from 'react';
import type { InputNumberProps } from 'antd';
import { Button, Flex, InputNumber } from 'antd';
import {ShoppingCartOutlined} from '@ant-design/icons';

const onChange: InputNumberProps['onChange'] = (value) => {
  console.log('changed', value);
};

const sharedProps = {
  mode: 'spinner' as const,
  min: 1,
  max: 10,
  defaultValue: 3,
  onChange,
  style: { width: 150 },
};

const InputNumberBox: React.FC = () => (
  <Flex  gap="small">
    <InputNumber {...sharedProps} placeholder="Outlined" />
    <Button icon={<ShoppingCartOutlined />}>ADD TO CART</Button>
  </Flex>
);

export default InputNumberBox;