import { Alert, Navbar, Dropdown, Avatar   } from "flowbite-react";

export default function NavbarNow() {
  return (
    <Navbar fluid rounded style={{ backgroundColor: 'transparent' }}>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">KIXX</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse style={{ color: 'white' }}>
        <Navbar.Link href="#" active style={{ color: 'white' }}>
          Home
        </Navbar.Link>
        <Navbar.Link href="#" style={{ color: 'white' }}>
          About
        </Navbar.Link>
        <Navbar.Link href="#" style={{ color: 'white' }}>
          Services
        </Navbar.Link>
        <Navbar.Link href="#" style={{ color: 'white' }}>
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#" style={{ color: 'white' }}>
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
