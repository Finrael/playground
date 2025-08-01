import React from 'react'
/*

type PropsAreEqual<P> = (
  prevProps: Readonly<P>,
  nextProps: Readonly<P>
) => boolean;

const withSampleHoC = <P extends {}>(
  component: {
    (props: P): Exclude<React.ReactNode, undefined>;
    displayName?: string;
  },
  propsAreEqual?: PropsAreEqual<P> | false,

  componentName = component.displayName ?? component.name
): {
  (props: P): React.JSX.Element;
  displayName: string;
} => {

  function WithSampleHoc(props: P) {
    //Do something special to justify the HoC.
    return component(props) as React.JSX.Element;
  }

  WithSampleHoc.displayName = `withSampleHoC(${componentName})`;

  let wrappedComponent = propsAreEqual === false ? WithSampleHoc : React.memo(WithSampleHoc, propsAreEqual);

  //copyStaticProperties(component, wrappedComponent);

  return wrappedComponent as typeof WithSampleHoc
};

*/
interface AddressBook{
    name: string,
    lastName:string,
    age:number
}

const AddressComponent: React.FC<AddressBook> = ({name, lastName, age} )=>{
    return(
        <div>
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
    )
}

export default AddressComponent