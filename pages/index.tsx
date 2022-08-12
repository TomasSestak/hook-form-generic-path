import React, {Fragment} from 'react';
import {FieldPath} from 'react-hook-form';

interface FormDataInterface {
  glass: string;
}

export default function Index() {
  return (
      <div className='App'>
        <h1>Hello React TypeScript.</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
  );
}

interface ObjectTest<T> {
  name: FieldPath<T>
}

const GenericComponent = <T extends FormDataInterface>() => {

  const props: ObjectTest<T> = {
    name: 'glass'
  }

  return (
      <Fragment></Fragment>
  )
}
