import { React, useState, useContext } from 'react';
import { Button, Modal } from 'antd';
import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Input,
} from "@material-tailwind/react";
import {
  addFeedback
} from '../../service/FeedbackService'
import {
  notification
} from 'antd'
import { toast } from 'react-toastify';


const FeedbackDriver = () => {
  const [show, setShow] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [rating, setRating] = useState(0);
  const [tip, setTip] = useState('')

  const [hover, setHover] = useState(0);

  const [api, contextHolder] = notification.useNotification();

  const feedbacks = ["Excellent service", "punctual", "Very friendly", "Very late", "Unfriendly driver", "Other"];
  const tips = ["No tip", "1$" , "2$" , "5$" , "Other"]

  const handleAddFeedback = async () => {
    const feedbackObject = {
      "customerId" : 9,
      "driverDetailId": 5,
      "feedbackContent": feedback,
      "rating" : rating,
     
    }
    const data = await addFeedback(feedbackObject)
    data?toast.success("Successful!"):toast.error("ERROR")
    }
     

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

const h = {
  "Rating" : rating,
  "Feedback": feedback,
  "Tip": tip,
}
  console.log(h);


  return (
    <div>
      
      <Modal
        title={<p className='flex justify-center font-semibold'>FEEDBACK DRIVER</p>}
        open={true}
        footer={
          <Button onClick={() => { 
            console.log(1);     
            handleAddFeedback()
          }} type="primary" className='bg-blue-gray-400 text-black font-semibold hover:bg-blue-gray-600'>
            Summit
          </Button>
        }
      >

        <Card>
          <CardBody>
            <div className="mb-10 items-center justify-between gap-6">
              <div className="flex justify-center gap-6">
                <Avatar
                  src="/img/bruce-mars.jpeg"
                  alt="bruce-mars"
                  size="xl"
                  variant="rounded"
                  className="rounded-lg shadow-lg shadow-blue-gray-500/40"
                />
              </div>
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1 flex justify-center mt-3">
                  Nguyen Tuan Minh
                </Typography>
                <Typography
                  variant="small"
                  className="flex justify-center font-normal text-blue-gray-600"
                >
                  nguyentuanminh@gmail.com
                </Typography>
              </div>
              <div className='mt-2'>

                <div className="">
                  <div className="">
                    <div className='flex justify-center'>
                      <div className="star-rating">
                        {[...Array(5)].map((star, index) => {
                          index += 1;
                          return (
                            <button
                              type="button"
                              key={index}
                              className={index <= (hover || rating) ? "on" : "off"}
                              onClick={() => setRating(index)}
                              onMouseEnter={() => setHover(index)}
                              onMouseLeave={() => setHover(rating)}
                            >
                              <span className="star">&#9733;</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-wrap gap-2 justify-center mt-3'>

                    {feedbacks.map((item) => <Button className={`w-[10rem] font-sans ${feedback == item ? `bg-blue-gray-400` : ``}`}
                      onClick={() => {
                        setFeedback(item)
                        { item === 'Other' ? setShow(true) : setShow(false) }
                      }}>{item}</Button>)}

                    {/* <Button className={`w-[10rem] font-sans ${show?'bg-gray-600 text-white':''}`} 
                          onClick={()=> {
                              setShow(!show)
                          }}
                       >
                       Other</Button> */}

                  </div>

                  {show && <div className='flex justify-center mt-4'>
                    <Input
                      type="email" color="blue-gray" label="Feedback"
                      onChange={(e) => {
                        e.preventDefault()
                        setFeedback(e.target.value)
                      }}
                    >
                    </Input>
                  </div>
                  }

                </div>

                <div className='border-t-2 border-blue-gray-400 w-[20%] flex m-auto mt-6' />

                <div className='flex gap-2 mt-2 justify-center'>
                  {tips.map(item => <Button  className={`w-[5rem] font-sans ${item == tip?`bg-blue-gray-400` : ``}`}
                                            onClick={() => {
                                              setTip(item)
                                            }}
                  >{item}</Button>)}
               
                </div>


              </div>
            </div>
          </CardBody>
        </Card>

      </Modal>
      {contextHolder}
    </div>

  )


};
export default FeedbackDriver;