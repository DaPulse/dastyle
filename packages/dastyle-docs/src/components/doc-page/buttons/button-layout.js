import React from 'react';
import './button-layout.scss';
import { Button } from '../../../../../ds-core/build/static/js/main';

const ButtonLayoutComponent = ({ buttonsToShow }) => {
  const Primary = () => {
    return (
      <div className='ds-container'>
        <div className='ds-row'>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <Button color='primary' size='lg'>Active</Button>
            </div>
          </div>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <Button color='primary'>Active</Button>
            </div>
          </div>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <Button color='primary' size='sm'>Active</Button>
            </div>
          </div>
        </div>
        <div className='ds-row'>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <Button color='primary' size='lg' disabled>Disabled</Button>
            </div>
          </div>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <Button color='primary' disabled>Disabled</Button>
            </div>
          </div>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <Button color='primary' size='sm' disabled>Disabled</Button>
            </div>
          </div>
        </div>
        <div className='ds-row'>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <span className='ds-blue-text'>
                Large
              </span>
              <br />
              Used when there is a single button in a page.
            </div>
          </div>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <span className='ds-blue-text'>
                Normal
              </span>
              <br />
              <br />
              <br />
            </div>
          </div>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <span className='ds-blue-text'>
                Small
              </span>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
  const Secondary = () => {
    return (
      <div className='ds-container'>
          <Button color='secondary' size='lg'>Secondary</Button>
      </div>
    );
  };
  const States = () => {
    return (
      <div className='ds-container'>
        <div className='ds-row'>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <Button color='primary' size='lg'>Active</Button>
            </div>
          </div>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <Button color='primary'>Active</Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Icon = () => {
    return (
      <div className='ds-container'>
        <div className='ds-row'>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <Button color='primary' size='lg'>Active</Button>
            </div>
          </div>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <Button color='primary'>Active</Button>
            </div>
          </div>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <Button color='primary' size='sm'>Active</Button>
            </div>
          </div>
        </div>
        <div className='ds-row'>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <span className='ds-blue-text'>
                Large
              </span>
            </div>
          </div>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <span className='ds-blue-text'>
                Normal
              </span>
            </div>
          </div>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <span className='ds-blue-text'>
                Small
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const ColorCoding = () => {
    return (
      <div className='ds-container'>
        <div className='ds-row'>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <Button color='shareable'>Shareable</Button>
            </div>
          </div>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <Button color='private'>Private</Button>
            </div>
          </div>
          <div className='ds-col'>
            <div className='ds-table-element'>
              <Button color='alert'>Alert</Button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  console.log('render buttons view');
  if (buttonsToShow === 'primary') {
    return Primary();
  }
  if (buttonsToShow === 'secondary') {
    return Secondary();
  }
  if (buttonsToShow === 'states') {
    return States();
  }
  if (buttonsToShow === 'icon') {
    return Icon();
  }


};
ButtonLayoutComponent.propTypes = {
  buttonsToShow: React.PropTypes.string.isRequired,
};

export default ButtonLayoutComponent;
