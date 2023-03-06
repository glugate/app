<?php

namespace App\Services;

use App\Models\Menu;

class MenusService
{
    /**
     * @return array
     */
    public static function getMainMenu()
    {
        return Menu::where('name', 'main_menu')
            ->first()->buildNestedTree()->toArray();
    }
}