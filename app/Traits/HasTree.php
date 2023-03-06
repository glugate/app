<?php

namespace App\Traits;

trait HasTree
{
    public $items;

    public function getTreeItemInstance(){
        throw new \Exception("Method 'getTreeItemInstance' must be overridden in parent class.");
    }

    /**
     * @return $this
     */
    public function buildNestedTree() {
        $this->items = $this->getTreeItemInstance()->toTree(['menu_id', $this->id]);
        return $this;
    }
}