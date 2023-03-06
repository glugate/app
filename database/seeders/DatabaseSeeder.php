<?php

namespace Database\Seeders;

use App\Models\Account;
use App\Models\Contact;
use App\Models\Menu;
use App\Models\MenuItem;
use App\Models\Organization;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Accounts
        $account = Account::create(['name' => 'Uno']);

        // USers
        User::factory()->create([
            'account_id' => $account->id,
            'first_name' => 'Glugate',
            'last_name' => 'Lara',
            'email' => 'info@uno.ba',
            'password' => 'secret',
            'owner' => true,
        ]);

        User::factory(5)->create(['account_id' => $account->id]);

        // Menu
        $ordering = 0;
        $mainMenu = Menu::create([
            'name' => 'main_menu'
        ]);

        // Dashboard
        MenuItem::create([
            'menu_id' => $mainMenu->id,
            'name' => 'dashboard',
            'label' => 'Dashboard',
            'ordering' => $ordering++,
            'icon' => 'DashboardRound'
        ]);
        // Organizations
        $organizationsMenuItem = MenuItem::create([
            'menu_id' => $mainMenu->id,
            'name' => 'organizations',
            'label' => 'Organizations',
            'slug' => 'organizations',
            'ordering' => $ordering++,
            'icon' => 'Organization24Filled'
        ]);

        // List Organizations
        MenuItem::create([
            'menu_id' => $mainMenu->id,
            'parent_id' => $organizationsMenuItem->id,
            'name' => 'list',
            'label' => 'List',
            'slug' => 'list',
            'ordering' => 0,
        ]);

        // Add Organizations
        MenuItem::create([
            'menu_id' => $mainMenu->id,
            'parent_id' => $organizationsMenuItem->id,
            'name' => 'add',
            'label' => 'Add',
            'slug' => 'add',
            'ordering' => 1,
        ]);

        // Contacts
        $contactsMenuItem = MenuItem::create([
            'menu_id' => $mainMenu->id,
            'name' => 'contacts',
            'label' => 'Contacts',
            'slug' => 'contacts',
            'ordering' => $ordering++,
            'icon' => 'BookContacts24Filled'
        ]);

        // List Contacts
        MenuItem::create([
            'menu_id' => $mainMenu->id,
            'parent_id' => $contactsMenuItem->id,
            'name' => 'list',
            'label' => 'List',
            'slug' => 'list',
            'ordering' => 0,
        ]);

        // Add Contacts
        MenuItem::create([
            'menu_id' => $mainMenu->id,
            'parent_id' => $contactsMenuItem->id,
            'name' => 'add',
            'label' => 'Add',
            'slug' => 'add',
            'ordering' => 1,
        ]);

        // Services
        MenuItem::create([
            'menu_id' => $mainMenu->id,
            'name' => 'services',
            'label' => 'Services',
            'slug' => 'services',
            'ordering' => $ordering++,
            'icon' => 'MiscellaneousServicesTwotone'
        ]);

        // Organizations
        $organizations = Organization::factory(120)
            ->create(['account_id' => $account->id]);

        // Contacts
        Contact::factory(100)
            ->create(['account_id' => $account->id])
            ->each(function ($contact) use ($organizations) {
                $contact->update(['organization_id' => $organizations->random()->id]);
            });
    }
}
