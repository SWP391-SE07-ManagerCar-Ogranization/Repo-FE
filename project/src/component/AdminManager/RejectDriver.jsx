import { React, useState, useContext } from 'react';
import { Button, Modal } from 'antd';
import {
    Card,
    CardBody,
} from "@material-tailwind/react";
import { Input } from 'antd';

const { TextArea } = Input;
const RejectDriver = (props) => {
    const driver = props.driver


    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const showLoading = (props) => {
        setOpen(true);
        setLoading(true);
        const titlep = props.title

        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const handleOnclick = () => {
        props.delete(driver.id)
        setOpen(false)
    }
    return (
        <>
            <div type="primary" onClick={showLoading}>
                Reject
            </div>
            <Modal
                title={<p>REJECT</p>}
                footer={
                    <Button type="primary" onClick={handleOnclick}>
                        {`Sent to <${driver.accountId}> ${driver.name}`}
                    </Button>
                }
                loading={loading}
                open={open}
                onCancel={() => setOpen(false)}
            >

                <Card>
                    <CardBody>
                        <div className="mb-10 items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                                <TextArea rows={4} />                                           

                            </div>
                        </div>
                    </CardBody>
                </Card>

            </Modal>
        </>
    );
};
export default RejectDriver;