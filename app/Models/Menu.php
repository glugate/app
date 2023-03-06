<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\HasTree;

class Menu extends Model
{
    use HasTree;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
    ];

    /**
     * @return MenuItem
     */
    public function getTreeItemInstance(){
        return new MenuItem();
    }

    /**
     * @return array
     */
    public function toArray()
    {
        return [
            'name' => $this->name,
            'items' => $this->items
        ];
    }
}
