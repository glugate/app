<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;

trait HasTreeStructure
{
    /**
     * @var string
     */
    protected string $parentColumn = 'parent_id';

    /**
     * @var string
     */
    protected string $orderColumn = 'ordering';

    /**
     * Get children of current node.
     *
     * @return HasMany
     */
    public function children(): HasMany
    {
        return $this->hasMany(static::class, $this->parentColumn);
    }

    /**
     * Get parent of current node.
     *
     * @return BelongsTo
     */
    public function parent(): BelongsTo
    {
        return $this->belongsTo(static::class, $this->parentColumn);
    }

    /**
     * @return string
     */
    public function getParentColumn(): string
    {
        return $this->parentColumn;
    }

    /**
     * Set parent column.
     *
     * @param string $column
     */
    public function setParentColumn(string $column)
    {
        $this->parentColumn = $column;
    }

    /**
     * Get order column name.
     *
     * @return string
     */
    public function getOrderColumn(): string
    {
        return $this->orderColumn;
    }

    /**
     * Set order column.
     *
     * @param string $column
     */
    public function setOrderColumn(string $column)
    {
        $this->orderColumn = $column;
    }

    /**
     * Format data to tree like array.
     *
     * @return array
     */
    public function toTree($where = null)
    {
        return $this->buildNestedArray([], 0, $where);
    }

    /**
     * Build Nested array.
     *
     * @param array $nodes
     * @param int $parentId
     *
     * @return array
     */
    protected function buildNestedArray(array $nodes = [], int $parentId = 0, $where = null): array
    {
        $branch = [];

        if (empty($nodes)) {
            $nodes = $this->allNodes($where);
        }

        foreach ($nodes as $node) {
            if ($node[$this->parentColumn] == $parentId) {
                $children = $this->buildNestedArray($nodes, $node[$this->getKeyName()], $where);

                if ($children) {
                    $node['children'] = $children;
                }

                $branch[] = $node;
            }
        }

        return $branch;
    }

    /**
     * Get all elements.
     *
     * @return mixed
     */
    public function allNodes($where = null) : array
    {
        $orderColumn = DB::getQueryGrammar()->wrap($this->orderColumn);
        $byOrder = $orderColumn.' ASC';

        $self = new static();

        if ($where) {
            $self = $self->where(...$where);
        }

        return $self->orderByRaw($byOrder)->get()->toArray();
    }

}