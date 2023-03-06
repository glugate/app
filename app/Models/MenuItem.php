<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\HasTreeStructure;

class MenuItem extends Model
{
    use HasTreeStructure;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'menu_id',
        'parent_id',
        'name',
        'slug',
        'icon'
    ];


    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }
}
