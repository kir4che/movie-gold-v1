import React, { FormEvent } from "react"; // 引入 FormEvent 型別

interface Props {
  handleSubmit: (e: FormEvent<HTMLButtonElement>) => void; // 加上明確的型別標註
  revText: React.RefObject<HTMLInputElement>; // 加上明確的型別標註
  labelText: string; // 加上明確的型別標註
  defaultValue: any; // 加上明確的型別標註，這裡可能需要更精確的型別
}

const ReviewForm: React.FC<Props> = ({ handleSubmit, revText, labelText, defaultValue }) => {
  return (
    <div>
      <div className="mb-3">
        <div>{labelText}</div>
        <input ref={revText} defaultValue={defaultValue} /> {/* 確保 ref 和 defaultValue 的型別符合 */}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ReviewForm;
