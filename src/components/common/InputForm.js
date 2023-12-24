import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,

  Typography,
  Input,
 
} from "@material-tailwind/react";
 
export function InputForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
 
  return (
    <>
      <Button
      className="normal-case bg-primary text-1xl leading-5 rounded-full hover:bg-transparent
       text-white font-sans font-[400] hover:text-blue py-2 px-4 border border-primary
        hover:border-secondary w-40 h-[3.5rem]" 
        aria-label="schedule call"
      onClick={handleOpen}>Schedule call</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
            Schedule A Call
            </Typography>
            <Input label="Name" size="lg" />
            <Input label="Email" size="lg" />
            <Input label="Phone Number" size="lg" />
          </CardBody>
          
            <Button variant="gradient" onClick={handleOpen}>
            Schedule
            </Button>
                    
        </Card>
      </Dialog>
    </>
  );
}

