import React, { RefObject } from "react";

interface ReviewFormProps {
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  revText: RefObject<HTMLTextAreaElement>;
  labelText: string;
  defaultValue?: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ handleSubmit, revText, labelText, defaultValue }) => {
  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <p>{labelText}</p>
        <textarea className="w-full pt-4 pb-12 pl-4 rounded-lg outline-none text-bgColor" ref={revText} defaultValue={defaultValue} />
      </div>
      <button className="px-4 py-1 font-bold rounded-md border-[1px] border-secondary text-secondary hover:bg-secondary hover:text-bgColor" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ReviewForm;
