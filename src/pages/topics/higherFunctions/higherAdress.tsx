
import { useState } from "react";
import type { ComponentType } from "react";

type TextComponentProps = {
  isHovered: boolean;
  name: string;
  lastName: string;
  age:number;
};
export const TextComponent = ({ name,lastName,age, isHovered }: Readonly<TextComponentProps>) => {
  return (
    <>
    <div style={{ backgroundColor: isHovered ? "gray" : "white" }}>
            <div>
                Name:{name}
            </div>
            <div>
                Last Name: {lastName}
            </div>
            <div>
                Age: {age}
            </div>
        </div>
    </>
  );
};

type InjectedProps = {
  isHovered: boolean;
};


const withHover= <T, >( WrappedComponent: ComponentType<T>)=>{
  return (props: Omit<T, keyof InjectedProps>)=>{
    const [isHovered, setHovered] = useState(false);
    const handleMouseEnter=()=>{
      setHovered(true)
    }
    const handleMouseLeave=()=>{
      setHovered(false)
    }

    return(
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <WrappedComponent {...(props as T)} isHovered={isHovered}/>
      </div>
    )
  }
}

export const HigherComponentWithHover = withHover(TextComponent);
