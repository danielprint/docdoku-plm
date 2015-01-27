(function(){
    'use strict';

    angular.module('dplm.services.translations', ['pascalprecht.translate'])
        .config(function ($translateProvider) {

            $translateProvider
                .translations('en', {
                    CUT: 'Cut',
                    COPY: 'Copy',
                    PASTE: 'Paste',
                    CHECKOUT: 'Checkout',
                    CHECKIN: 'Checkin',
                    UNDO_CHECKOUT: 'Undo checkout',
                    PUT: 'Put',
                    FORCE: 'Force rewrite',
                    CREATE_PART: 'Create a new part',
                    STANDARD: 'Standard part',
                    WORKSPACE: 'Workspace',
                    SAVE: 'Save',
                    OPEN_IN_EXPLORER: 'Open in explorer',
                    OPEN_IN_BROWSER: 'Open in browser',
                    FAVORITE: 'Favorite',
                    REFRESH_FOLDER: 'Refresh folder',
                    DOWNLOAD: 'Download',
                    HOME: 'Home',
                    SETTINGS: 'Settings',
                    LANG: 'Lang',
                    FR: 'French',
                    EN: 'English',
                    SAVE_TO: 'Save to',
                    ADD_FOLDER: 'Add folder',
                    RECURSIVE: 'Recursive',
                    NO_PARTS: 'No parts',
                    CONFIGURATION_ERROR: 'Configuration error',
                    REQUIREMENTS_MISSING: 'Requirements not satisfied',
                    PART_NUMBER: 'Part number',
                    PART_NAME: 'Part name',
                    PART_DESCRIPTION: 'Description',
                    SEARCH: 'Search',
                    USER: 'User login',
                    PASSWORD: 'Password',
                    HOST: 'Host',
                    PORT: 'Port',
                    ITEMS: 'item(s)',
                    LOADING_MORE: 'Loading more',
                    FOLDERS: 'Folders',
                    CHECKOUT_BY: 'Checkouted by',
                    LAST_ACTION: 'Last action',
                    LAST_MODIFIED: 'Downloaded',
                    NO_CAD_FILE: 'No CAD file',
                    DELETE_FOLDER:'Delete folder',
                    NO_FILES:'Folder is empty',
                    FOLDER:'Folder',
                    CONFIGURATION_MISSING:'Configuration missing, please fill in the required fields',
                    CHECKING_FOR_JAVA:'Looking for suitable Java version ...',
                    NO_SUITABLE_JAVA:'No suitable Java version found',
                    FETCHING_WORKSPACES:'Receiving workspaces list',
                    LATEST:'Latest',
                    BASELINE:'Baseline',
                    DELETE_FOLDER_CONFIRM_TITLE:'Are you sure to want to remove this folder ?',
                    DELETE_FOLDER_CONFIRMED:'Folder removed',
                    YES:'Yes',
                    NO:'No',
                    GREETINGS:'Welcome',
                    FILES:'file(s)',
                    FAVORITE_FOLDERS:'Favorite folders',
                    NO_FOLDERS:'No folders',
                    CONNECTED_TO:'connected to',
                    NEW_STUFF:'New files',
                    AVAILABLE:'Available',
                    CHECKOUTED_BY_ME:'Checkouted by me',
                    RELEASED:'Released',
                    LOCKED:'Locked',
                    UP_TO_DATE:'Up to date',
                    MODIFIED:'Modified',
                    NOT_SYNC:'Not synchronised',
                    LAST_WORKSPACES_VISITED:'Last workspaces visited',
                    NOTHING_TO_SHOW:'Nothing to show',
                    CONVERSION_STATUS:'Conversion status',
                    PENDING:'Pending',
                    SUCCESS:'Success',
                    FAIL:'Fail',
                    NO_CONVERSION:'No conversion currently'
                })
                .translations('fr', {
                    CUT: 'Couper',
                    COPY: 'Copier',
                    PASTE: 'Coller',
                    CHECKOUT: 'Réserver',
                    CHECKIN: 'Libérer',
                    UNDO_CHECKOUT: 'Annuler la réservation',
                    PUT: 'Envoyer',
                    FORCE: 'Ecraser',
                    CREATE_PART: 'Créer un nouvel article',
                    STANDARD: 'Article standard',
                    WORKSPACE: 'Espace de travail',
                    SAVE: 'Enregistrer',
                    OPEN_IN_EXPLORER: 'Ouvrir le dossier',
                    OPEN_IN_BROWSER: 'Ouvrir dans un navigateur',
                    FAVORITE: 'Favoris',
                    REFRESH_FOLDER: 'Rafraîchir le dossier',
                    DOWNLOAD: 'Télécharger',
                    HOME: 'Accueil',
                    SETTINGS: 'Paramètres',
                    LANG: 'Langue',
                    FR: 'Français',
                    EN: 'Anglais',
                    SAVE_TO: 'Enregistrer dans',
                    ADD_FOLDER: 'Ajouter un dossier',
                    RECURSIVE: 'Récursif',
                    NO_PARTS: 'Aucun article',
                    CONFIGURATION_ERROR: 'Erreur de configuration',
                    REQUIREMENTS_MISSING: 'Prérequis non satisfaits',
                    PART_NUMBER: 'Identifiant de l\'article',
                    PART_NAME: 'Nom de l\'article',
                    PART_DESCRIPTION: 'Description',
                    SEARCH: 'Rechercher',
                    USER: 'Identifiant',
                    PASSWORD: 'Mot de passe',
                    HOST: 'Hôte',
                    PORT: 'Port',
                    ITEMS: 'entrée(s)',
                    LOADING_MORE: 'Chargement d\'entrées supplémentaires',
                    FOLDERS: 'Dossiers',
                    CHECKOUT_BY: 'Réservé par',
                    LAST_ACTION: 'Dernière action',
                    LAST_MODIFIED: 'Dernier téléchargement',
                    NO_CAD_FILE: 'Aucun fichier CAD',
                    DELETE_FOLDER:'Supprimer le dossier',
                    NO_FILES:'Le dossier est vide',
                    FOLDER:'Dossier',
                    CONFIGURATION_MISSING:'Configuration incomplète, veuillez renseigner les champs obligatoires',
                    CHECKING_FOR_JAVA:'Recherche de java ...',
                    NO_SUITABLE_JAVA:'Pas de version de Java trouvée',
                    FETCHING_WORKSPACES:'Récupération de la liste des espaces de travail ...',
                    LATEST:'Dernière',
                    BASELINE:'Baseline',
                    DELETE_FOLDER_CONFIRM_TITLE:'Êtes-vous sûr de vouloir supprimer ce dossier ?',
                    DELETE_FOLDER_CONFIRMED:'Dossier supprimé',
                    YES:'Oui',
                    NO:'Non',
                    GREETINGS:'Bienvenue',
                    FILES:'fichier(s)',
                    FAVORITE_FOLDERS:'Dossiers favoris',
                    NO_FOLDERS:'Aucun dossier',
                    CONNECTED_TO:'connecté à',
                    NEW_STUFF:'Nouveaux fichiers',
                    AVAILABLE:'Disponible',
                    CHECKOUTED_BY_ME:'Réservé par moi',
                    RELEASED:'Finalisée',
                    LOCKED:'Vérrouillé',
                    UP_TO_DATE:'À jour',
                    MODIFIED:'Modifié',
                    NOT_SYNC:'Non synchronisé',
                    LAST_WORKSPACES_VISITED:'Derniers espaces de travail utilisés',
                    NOTHING_TO_SHOW:'Aucune entrée',
                    CONVERSION_STATUS:'Statut de la conversion',
                    PENDING:'En cours',
                    SUCCESS:'Succès',
                    FAIL:'Echoué',
                    NO_CONVERSION:'Pas de conversion en cours'
                });

            $translateProvider.preferredLanguage(localStorage.lang || 'en');

        });
})();
