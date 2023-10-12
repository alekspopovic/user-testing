import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Stubbed UserProfilePage component
const UserProfilePage = ({ user }) => {
  return (
    <div>
      <p>
        Name: <span data-testid="username">{user.name}</span>
      </p>
      <p>
        Email: <span data-testid="email">{user.email}</span>
      </p>
      <button data-testid="editButton" onClick={handleEdit}>
        Edit
      </button>
      <input
        type="text"
        aria-label="Name"
        value={user.name}
        onChange={handleNameChange}
        data-testid="nameInput"
      />
      <input
        type="email"
        aria-label="Email"
        value={user.email}
        onChange={handleEmailChange}
        data-testid="emailInput"
      />
      <button onClick={handleSave} data-testid="saveButton">
        Save
      </button>
    </div>
  );
};

// Stubbed functions for event handlers
const handleEdit = jest.fn();
const handleNameChange = jest.fn();
const handleEmailChange = jest.fn();
const handleSave = jest.fn();

describe("User Profile Page component elements and data are rendered correctly", () => {
  it("renders component elements", () => {
    const user = {
      name: "John Doe",
      email: "john.doe@example.com",
    };

    render(<UserProfilePage user={user} />);
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("editButton")).toBeInTheDocument();
    expect(screen.getByTestId("nameInput")).toBeInTheDocument();
    expect(screen.getByTestId("emailInput")).toBeInTheDocument();
    expect(screen.getByTestId("saveButton")).toBeInTheDocument();
  });

  it("renders username and email data", () => {
    const user = {
      name: "John Doe",
      email: "john@doe.com",
    };

    render(<UserProfilePage user={user} />);
    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
  });
});

describe("User can edit their information on UserProfilePage component", () => {
  it("alows user to edit data", () => {
    const user = {
      name: "John Doe",
      email: "john@doe.com",
    };

    render(<UserProfilePage user={user} />);

    // Simulate a user editing their name and email
    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    const nameInput = screen.getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "New Name" } });

    const emailInput = screen.getByLabelText("Email");
    fireEvent.change(emailInput, { target: { value: "new@email.com" } });

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    // check if all event handling functions have been fired
    expect(handleEdit).toHaveBeenCalledTimes(1);
    expect(handleNameChange).toHaveBeenCalledTimes(1);
    expect(handleEmailChange).toHaveBeenCalledTimes(1);
    expect(handleSave).toHaveBeenCalledTimes(1);
  });
});
