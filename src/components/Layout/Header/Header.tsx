import { Button } from 'components/Button';
import { MxLink } from 'components/MxLink';
import { environment } from 'config';
import { logout } from 'helpers';
import { useGetIsLoggedIn } from 'hooks';
import { RouteNamesEnum } from 'localConstants';
import { routes } from 'routes/routes';
import MultiversXLogo from '../../../assets/img/multiversx-logo.svg?react';
import { useMatch, useLocation } from 'react-router-dom';

const callbackUrl = `${window.location.origin}/unlock`;
const onRedirect = undefined; // use this to redirect with useNavigate to a specific page after logout
const shouldAttemptReLogin = false; // use for special cases where you want to re-login after logout
const options = {
  /*
   * @param {boolean} [shouldBroadcastLogoutAcrossTabs=true]
   * @description If your dApp supports multiple accounts on multiple tabs,
   * this param will broadcast the logout event across all tabs.
   */
  shouldBroadcastLogoutAcrossTabs: true,
  /*
   * @param {boolean} [hasConsentPopup=false]
   * @description Set it to true if you want to perform async calls before logging out on Safari.
   * It will open a consent popup for the user to confirm the action before leaving the page.
   */
  hasConsentPopup: false
};

export const Header = () => {
  const isLoggedIn = useGetIsLoggedIn();
  const isUnlockRoute = Boolean(useMatch(RouteNamesEnum.unlock));
  const location = useLocation();

  const ConnectButton = isUnlockRoute ? null : (
    <MxLink to={RouteNamesEnum.unlock}>Connect</MxLink>
  );

  const handleLogout = () => {
    sessionStorage.clear();
    logout(
      callbackUrl,
      onRedirect,
      shouldAttemptReLogin,
      options
    );
  };

  return (
    <header className='bg-white shadow-lg'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center'>
            <MxLink
              className='flex items-center'
              to={RouteNamesEnum.home}
            >
              <MultiversXLogo className='w-full h-6' />
            </MxLink>

            {isLoggedIn && (
              <nav className='ml-8 flex space-x-8'>
                {routes.map((route) => (
                  <MxLink
                    key={route.path}
                    to={route.path}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      location.pathname === route.path
                        ? 'border-blue-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    {route.title}
                  </MxLink>
                ))}
              </nav>
            )}
          </div>

          <div className='flex items-center gap-4'>
            <div className='flex gap-1 items-center'>
              <div className='w-2 h-2 rounded-full bg-green-500' />
              <p className='text-gray-600'>{environment}</p>
            </div>

            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                className='inline-block rounded-lg px-3 py-2 text-center hover:no-underline my-0 text-gray-600 hover:bg-slate-100 mx-0'
              >
                Close
              </Button>
            ) : (
              ConnectButton
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
