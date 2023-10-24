import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

/* eslint-disable import/no-webpack-loader-syntax, import/extensions, global-require, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */

/**
 * Theme Layouts Doc
 * This document provides information on how to use theme layouts.
 */
function MultiLanguageDoc() {
	return (
		<>
			<Typography
				variant="h4"
				className="mb-40 font-700"
			>
				Multi Language
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				Fuse React uses{' '}
				<a
					href="https://react.i18next.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<code>react-i18next</code>
				</a>{' '}
				for to support multiple languages.
			</Typography>

			<Typography
				className="mb-16 p-16 border-1 bg-yellow-50 rounded-16 text-gray-800"
				component="p"
			>
				Although most people don't require multi-language capabilities for their apps, we have chosen NOT to
				incorporate translations into every application. To get a glimpse of how translations work in practice,
				try visiting the Mail app and altering the language in the Toolbar. This is the only app specifically
				configured with translations for demonstration purposes. If you wish to delve into the details, you can
				review the source code for an example of how they are used.
			</Typography>

			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Usage
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				To use the translations, create a translation file called <code>i18n/en.ts</code> within the folder of
				the app you would like to use them with. For example, to use the translations in the Mail app, create
				this file inside the <code>apps/mail</code> folder.
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx mb-24"
			>
				{require('!raw-loader!src/app/main/apps/mailbox/i18n/en.ts')}
			</FuseHighlight>

			<Typography
				className="mb-16"
				component="p"
			>
				And register the language file with <code>i18next.addResourceBundle()</code> at
				<code>src/app/main/apps/mailbox/MailboxAppConfig.tsx</code>
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx mb-24"
			>
				{require('!raw-loader!src/app/main/apps/mailbox/MailboxAppConfig.tsx')}
			</FuseHighlight>

			<Typography
				className="mb-16"
				component="p"
			>
				And use in a component with <code>useTranslation</code> hook as below:
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx mb-24"
			>
				{`
                        import {useTranslation} from 'react-i18next';

                        const {t} = useTranslation('mailApp');
                    
                        return (
                            <div className="p-24">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className="w-full"
                                    onClick={handleOpenDialog}
                                >
                                    {t('COMPOSE')}
                                </Button>
                        `}
			</FuseHighlight>

			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Default Language
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				To change the default language of the Fuse React, you need to change <code>lng</code> setting in the
				file <code>src/i18n.ts</code>
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				You can change "eng" value to "ar" to test it out.
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx mb-24"
			>
				{require('!raw-loader!src/i18n.ts')}
			</FuseHighlight>

			<Typography
				className="text-20 mt-20 mb-10 font-700"
				variant="h5"
			>
				Changing Language
			</Typography>

			<Typography
				className="mb-16"
				component="p"
			>
				You should use <code>changeLanguage</code> redux action to change language dynamically:
			</Typography>

			<FuseHighlight
				component="pre"
				className="language-jsx mb-24"
			>
				{`
                           import { changeLanguage } from 'app/store/i18nSlice';

                            .
                            .

                            dispatch(changeLanguage(lng.id));
                        `}
			</FuseHighlight>

			<Typography
				className="mb-16"
				component="p"
			>
				Checkout example usage at
				<code>app/theme-layouts/shared-components/LanguageSwitcher.tsx</code>
			</Typography>
		</>
	);
}

export default MultiLanguageDoc;
