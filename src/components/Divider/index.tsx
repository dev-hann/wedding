// import styles from './index.module.css';
export interface DividerProps {
  title: string;
}

export default function Divider({ title }: DividerProps) {
  return (
    <div className="py-8 flex-col flex items-center">
      <div className="w-[60%] ">
        <div className="h-[2px] bg-gray-300"></div>
        <div className="flex text-xl font-bold justify-center m-5">{title}</div>
      </div>
    </div>
  );
}
