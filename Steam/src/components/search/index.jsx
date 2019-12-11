import React from "react";
import { Form, Input, Button } from "reactstrap";

const Search = () => {
  const changle = e => {
    console.log(e.target.value);
  };

  return (
    <Form inline className="myNav">
      <Input
        type="text"
        placeholder="search the store"
        size="80"
        className="mr-sm-2"
        onChange={changle}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default Search;
