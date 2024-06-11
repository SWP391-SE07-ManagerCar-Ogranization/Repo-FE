import React from 'react';
import { Button, Dropdown, Space } from 'antd';

const DropdownC = (props) => {
   const items = [
        {
            key: '1',
            label: (
                <a onClick={props.actionClick} target="_blank" rel="noopener noreferrer" href="">
                    {props.action}
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a onClick={props.detailOnclick} target="_blank" rel="noopener noreferrer" href="">
                    {props.detail}
                </a>
            ),
        },
        
    ];

    return (
        <Space direction="vertical">
            <Space wrap>
                <Dropdown
                    menu={{
                        items,
                    }}
                    placement="bottomLeft"
                >
                    <Button className='border-none' disabled={true}><i class="gg-more-alt"></i></Button>
                </Dropdown>
               
            </Space>
        </Space>
    )

}

export default DropdownC;